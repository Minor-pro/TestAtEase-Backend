var express = require('express');
const { addQuestion } = require('../controllers/question');
var router = express.Router();

router.post('/question', addQuestion);

module.exports = router;

