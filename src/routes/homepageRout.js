const express= require("express");
const router= express.Router();
const homepageController= require("../controllers/homepageCon");

router.get("/", homepageController.homepageRender);

module.exports = router;