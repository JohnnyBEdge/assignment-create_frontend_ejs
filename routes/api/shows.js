var express = require('express');
var router = express.Router();


const shows = require('../../data/shows');

/* GET users listing. */
router.get('/shows', function(req, res, next) {
  const results = shows.getShows();
  res.send(results);
});

router.post('/', function (req, res) {
  // const results = shows.addShow(req)
  // res.send(results);
  const show = shows.addShow(req.body);
  res.send(show);
});

router.delete('/:newShow', function(req, res, next){
  const show = shows.deleteShow(req.params.newShow);
  res.send(show);
})

router.put('/', function (req, res) {
  const results = shows.updateOrAdd(req);
  res.send(results)
});


router.patch('/', function(req, res){
  const results = shows.updateShow(req);
  res.send(results);
})

module.exports = router;