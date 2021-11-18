const Teacher=require("../models/teacher");
const Question=require("../models/question")
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema;

const { customAlphabet } = require("nanoid");

const addQuestion = async (req, res) => {
    
    const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz", 8);
    const questionId = nanoid();
    try{
        const { questionText, questionImage, questionTopicTags, teacher, recognizedWords } = req.body;
        console.log(recognizedWords)
        const question=await new Question({text:questionText, images:questionImage, id:questionId, topicTags:questionTopicTags, recognizedWords:recognizedWords}).save();
        try{
            const updatedTeacher = await Teacher.findOneAndUpdate({email:teacher.email},{ $addToSet: { questions: question._id}},{new:true});       
            res.status(200).send({question, updatedTeacher});
        }
        catch(err){
            res.status(400).send('Failed to Add Question to Teacher Database')
        }
    }catch(err){
        res.status(400).send('Create Question Failed')
    }
};
const updateQuestion = async (req, res) => {
    try{
        const { questionText, qid, questionImage, questionTopicTags,recognizedWords } = req.body;
        //const question=await new Question({text:questionText, images:questionImage, id:questionId, topicTags:questionTopicTags, recognizedWords:recognizedWords}).save();
        const question=await Question.findOneAndReplace({id:qid},{text:questionText, images:questionImage, id:qid, topicTags:questionTopicTags, recognizedWords:recognizedWords}).exec();
        res.status(200).send(question)
    }catch(err){
        res.status(400).send('Update Question Failed')
    }
}
const getQuestions = async (req,res)=>{
    const teacherEmail=req.params.email;
    try{
        const questionIds= (await Teacher.findOne({email:teacherEmail}))['questions']
        const questions=await Question.find({ _id: {$in : questionIds}})
                                    .sort({'updatedAt':-1})
                                    .exec()
        res.status(200).send(questions)
    }
    catch(err){
        res.status(400).send('List All Questions Failed')
    }
}
const getSearchedQuestions = async (req,res)=>{
    const {teacher,query}=req.body;
    console.log(teacher,query)
    const regexQuery=new RegExp("^" + query.toLowerCase(), "i")
    try{
        const questionIds= (await Teacher.findOne({email:teacher.email}))['questions']
        const searchedQuestions=await Question.find({ _id: {$in : questionIds},topicTags:{$in:regexQuery}})
                                    .sort({'updatedAt':-1})
                                    .exec();
        res.status(200).send(searchedQuestions)
    }
    catch(err){
        res.status(400).send('Search Questions Failed')
    }
}
module.exports={addQuestion, getQuestions,updateQuestion,getSearchedQuestions}