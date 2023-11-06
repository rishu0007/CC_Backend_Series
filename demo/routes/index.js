var express = require('express');
var router = express.Router();
const userModel = require("./users");

// router.get('/', function(req, res) {
//   res.render("index");
// });

// router.get('/create', async function(req, res) {
//   const createduser = await userModel.create({
//     username: "Rishu",
//     age: 22,
//     name: "Rishu"
//   });
//   res.send(createduser);
// });

router.get("/", function(req, res) {
  req.session.ban = true;
  res.cookie("age", 25);
  res.render("index");
})

router.get("/read", function(req,res) {
  console.log(req.cookies.age);
  res.send("check");
});


router.get("/delete", function(req,res) {
  res.clearCookie("age");
  res.send("clear hogai");
});

router.get("/checkban", function(req, res) {
  console.log(req.session);
  res.send("check kiya h console dekho");
});

module.exports = router;

