var express = require('express');
var router = express.Router();

router.get('/questiontext', function(req, res, next) {
  res.json({"data":"question text"});
});

module.exports = router;

