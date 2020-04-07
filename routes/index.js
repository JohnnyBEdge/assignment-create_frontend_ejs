var express = require('express');
var router = express.Router();

const shows = require('../data/shows');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/shows', function ( req, res, next){
  res.render('shows', { title: 'Shows', data: shows.getShows() });
})

module.exports = router;
