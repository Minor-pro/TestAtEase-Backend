const Teacher=require("../models/teacher");
const Question=require("../models/question")

const { customAlphabet } = require("nanoid");

const addQuestion = async (req, res) => {
    
    const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz", 8);
    const questionId = nanoid();
    try{
        const { questionText, questionImage, questionTopicTags, teacher } = req.body;
        console.log(questionText, questionImage, questionTopicTags, teacher)
        const question=await new Question({text:questionText, images:questionImage, id:questionId, topicTags:questionTopicTags}).save();
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
module.exports={addQuestion}