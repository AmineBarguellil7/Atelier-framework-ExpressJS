var express = require("express");
const contact = require("../model/contact");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("form.twig", { title: "amine", nom: "ok" });
});



module.exports = router;
