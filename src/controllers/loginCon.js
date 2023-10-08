const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.loginRender = async (req, res) => {
    res.render("auth/loginView", {
        title: "LOG-IN -t",
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.user.role
    });
};

exports.postLogIn = async (req, res) => {
    const usernameOrEmail = req.body.usernameOrEmail;
    const password = req.body.password;
  
    try {
        const [userData] = await User.findUserByUsernameOrEmail(usernameOrEmail);
        const hash = userData.password;
        const isPasswordValid = await bcrypt.compare(password, hash);
    
        if (isPasswordValid) {
            req.session.user = userData; 
            req.session.isLoggedIn = true;
            res.redirect("/");
        } else {
            res.status(401).render('redirect', { message: "Password or email is incorrect" });
        }
    } catch (err) {
        console.error('Error in loginCon.js - exports.postLogIn', err);
        res.status(500).render('redirect', { message: "An error occurred during login" });
    }
}

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        // console.log(err);
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
};