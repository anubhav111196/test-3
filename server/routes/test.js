var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
});

router.get('/test', function(req, res, next) {
  res.send ('test api called');
})

module.exports = router;
