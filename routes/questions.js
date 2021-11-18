var express = require('express');
const { addQuestion, getQuestions, updateQuestion, getSearchedQuestions } = require('../controllers/question');
var router = express.Router();

router.post('/question', addQuestion);
router.post('/question/:qid', updateQuestion);
router.get('/list/:email',getQuestions);
router.post('/list/search',getSearchedQuestions)

module.exports = router;

