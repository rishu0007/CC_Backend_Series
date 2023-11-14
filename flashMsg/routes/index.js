var express = require('express');
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

// router.get('/failed', function(req, res) {
//   req.flash("age", 22);
//   req.flash("name", "Rishu");
//   res.send("bangya");
// });

// router.get('/check', function(req, res) {
//   console.log(req.flash("age"), req.flash("name"));
//   res.send("check backend terminal");
// });

router.get("/create", async function(req,res) {
  let userdata = await userModel.create({
    username: "Rishu",
    nickname: "Chandan",
    description: "I am 22 and I love Cricket",
    categories: ['js', 'node', 'react', 'gsap', 'modern animations']
  })
  res.send(userdata);
});

module.exports = router;
