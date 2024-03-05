const express = require("express");
const router = express.Router();

const services = require("../services/render");


router.get("/", services.homeRoutes);
router.get("/video_chat", services.video_chat);
router.get("/text_chat", services.text_chat);


module.exports = router;