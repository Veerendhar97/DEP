var express = require("express");
var router = express.Router();
var check = require("../public/javascripts/credentials.js");
var path = require("path");
var fs = require("fs");
var crypto = require("crypto");

router.get("/signout", function (req, res, next) {
  res.clearCookie("uname");
  res.clearCookie("auth_val");
  res.redirect("http://localhost:3000");
});
router.post("/login", function (req, res) {
  const isValid = check.checkUser(req.body.username, req.body.password);

  if (isValid.bool) {
    res.cookie("uname", req.body.username);
    word = req.body.username + req.body.password;
    encrypt = crypto.createHmac("sha1", word).digest("hex");
    res.cookie("auth_val", encrypt);
    res.redirect(`http://localhost:3000/users/posts/${encrypt}`);
  } else {
    res.send("invalid");
  }
});

router.post("/posts/new", function (req, res, next) {
  const newPost = {
    uname: req.cookies["uname"],
    post: req.body.content,
  };
  var link = path.join(__dirname, "../public", "json_files", "posts.json");
  fs.readFile(link, "utf-8", function (err, data) {
    if (err) throw err;

    var arrayOfObjects = JSON.parse(data);
    arrayOfObjects.posts.push(newPost);

    fs.writeFile(link, JSON.stringify(arrayOfObjects), "utf-8", function (err) {
      if (err) throw err;
      console.log("Done!");
    });
  });
  res.redirect(`http://localhost:3000/users/posts/${req.cookies["auth_val"]}`);
});

router.get("/posts/all", function (req, res, next) {
  var obj = {};
  fs.readFile(
    path.join(__dirname, "../public", "json_files", "/posts.json"),
    function (err, data) {
      if (err) {
        throw err;
      }
      obj = JSON.parse(data);
      return res.send(obj.posts);
    }
  );
});

router.get("/posts/mail", function (req, res, next) {
  const mail = check.getMail(req.cookies["uname"]);
  email = JSON.stringify({ mail: mail });
  return res.send(email);
});

router.get("/posts/:encrypt", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public", "templates", "posts.html"));
});

module.exports = router;
