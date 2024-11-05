const router = require('express').Router();


// GET http://localhost:3000/

router.get("/", (req, res) => {
    res.render("home.pug");
  });
  
// GET http://localhost:3000/about

router.get("/about", (req, res) => {
    res.render("about.pug");
  });
  
// GET http://localhost:3000/location

router.get("/location", (req, res) => {
    res.render("location.pug");
  });
  
// GET http://localhost:3000/mission

router.get("/mission", (req, res) => {
    res.render("mission.pug");
  });
  
// GET http://localhost:3000/contact

router.get("/contact", (req, res) => {
    res.render("contact.pug");
  });
  

module.exports = router;