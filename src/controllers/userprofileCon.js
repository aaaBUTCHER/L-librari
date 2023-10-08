

exports.userprofileRender = async (req, res) => {
    res.render("user/userprofileView", {
        title: "USER PROFILE -t",
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.user.role
    })
}