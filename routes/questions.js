var express = require('express');
const { addQuestion, getQuestions, updateQuestion } = require('../controllers/question');
var router = express.Router();

router.post('/question', addQuestion);
router.post('/question/:qid', updateQuestion);
router.get('/list/:email',getQuestions)

module.exports = router;

