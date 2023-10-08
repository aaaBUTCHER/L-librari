exports.homepageRender = async (req, res) => {
    res.render("homepage/homepageView", {
        title: "HOME -t",
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.user.role
    });
};