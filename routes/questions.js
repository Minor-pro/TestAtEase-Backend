var express = require('express');
const { addQuestion, getQuestions } = require('../controllers/question');
var router = express.Router();

router.post('/question', addQuestion);
router.get('/list/:email',getQuestions)

module.exports = router;

