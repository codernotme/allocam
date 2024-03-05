const axios = require("axios");

exports.homeRoutes = (req, res) => {
    res.render("index");
};

exports.video_chat = (req, res) => {
    res.render("video_chat");
}

exports.text_chat = (req, res) => {
    res.render("text_chat");
}