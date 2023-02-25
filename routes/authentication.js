var express = require("express");
const User = require("../model/users");
var router = express.Router();

/* GET home page. */

router.get('/display', function(req, res){

  User.find(function(err, data){
      if(err) throw err;
  
      res.json(data);
  });    
  });




router.post("/", function (req, res) {
  User.findOne(
    { username: req.body.username, password: req.body.password },
    (err, data) => {
      if (err) {
        console.log("Erreur de base de données : ", err);
      } else {
        if (data) {
          console.log("Bienvenue");
          res.redirect("/contact");
        } else {
          console.log("Nom d'utilisateur ou mot de passe incorrect");
        }
      }
    }
  );
});

router.get("/search", function (req, res) {
  User.findOne({ username: req.body.username }, (err, data) => {
    if (err) {
      console.log("Erreur de base de données : ", err);
    } else {
      if (data) {
        console.log("utilisateur trouve avec succes");
        res.json(data);
      } else {
        console.log("utilisateur n'existe pas");
      }
    }
  });
});

router.post("/add", function (req, res) {
  var u = new User({
    username: req.body.username,
    password: req.body.password,
  });
  u.save();
  res.redirect('/contact/')
});

module.exports = router;
