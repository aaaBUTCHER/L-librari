const express= require("express");
const router= express.Router();
const userprofileController= require("../controllers/userprofileCon");

router.get("/", userprofileController.userprofileRender);

module.exports = router;