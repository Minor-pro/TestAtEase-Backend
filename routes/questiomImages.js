var express = require('express');
var router = express.Router();

const { questionImages } = require('../controllers/questionImages');

router.post("/questionImages", questionImages);


module.exports = router;