const express= require("express");
const router= express.Router();
const loginController= require("../controllers/loginCon");

router.get("/", loginController.loginRender);

router.post("/", loginController.postLogIn);

router.post("/logout", loginController.postLogout);

module.exports = router;