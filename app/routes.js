// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});

// route for other pages
router.get('/about', function(req, res) {
  res.render('pages/about');
});

router.get('/services', function(req, res) {
  res.render('pages/services');
});

router.get('/csv2tbl2json', function(req, res) {
  res.render('pages/csv2tbl2json');
});


router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {
  res.send('Thank you for contacting us, ' + req.body.name + '! We will be in touch with you shortly!');
  res.send('<br><br><br><button type="button" class="btn btn-primary btn-lg"><i class="fa fa-home"></i> Home </button><br><br>');
});