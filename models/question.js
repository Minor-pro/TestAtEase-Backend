const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const QuestionSchema = new Schema({
    text:{
        type: String,
    },
    images:{
        type: String
    },
    id:{
        type: String,
        required: true
    },
    topicTags:{
        type:Array,
    },
    recognizedWords:{
        type:Array
    }
},{ timestamps: true });
module.exports = Item = mongoose.model('question', QuestionSchema);