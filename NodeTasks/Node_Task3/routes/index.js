var express = require("express");
var router = express.Router();
var path = require("path");
var checkUser = require("../public/javascripts/credentials.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public", "templates", "welcome.html"));
});

router.get("/login", function (req, res, next) {
  if (!req.cookies["auth_val"]) {
    res.sendFile(path.join(__dirname, "../public", "templates", "login.html"));
  } else {
    res.redirect(
      `http://localhost:3000/users/posts/${req.cookies["auth_val"]}`
    );
  }
});

module.exports = router;
