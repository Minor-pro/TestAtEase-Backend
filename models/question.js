const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const QuestionSchema = new Schema({
    text:{
        type: String,
        required: true
    },
    images:{
        type:{
            data: Buffer,
            contentType: String
        }
    },
    id:{
        type: Number,
        required: true
    },
    topicTags:{
        type:Array,
    }
});
module.exports = Item = mongoose.model('question', QuestionSchema);