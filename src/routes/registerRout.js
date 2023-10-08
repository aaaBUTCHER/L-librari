const express= require("express");
const router= express.Router();
const registerController= require("../controllers/registerCon");

router.get("/", registerController.registerRender);

router.post("/", registerController.addNewUser)

module.exports = router;