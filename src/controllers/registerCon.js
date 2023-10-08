const User = require("../models/User");

exports.registerRender = async (req, res) => {
    res.render("auth/registerView", {
        title: "REGISTER -t",
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.user.role
    });
};

exports.addNewUser = async (req, res, next) => {

    console.log("1")
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const email = req.body.email;
    const date_of_birth = req.body.date_of_birth;
    const password1 = req.body.password1;
    const password2 = req.body.password2;

    if (password1 !== password2){
        return res.status(400).send("Passwords do not match");
    }
    const user = new User (username, email, password1, firstname, lastname, date_of_birth);

    try{
        await user.createUser();
        res.redirect("/");
    }catch(err){
        console.log(err);
        await res.send(err.sqlMessage.split('for')[0]).status(400);
        setTimeout( () => {
        }, 5000);
    }
}