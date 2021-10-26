const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TeacherSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    questions:[{
        type:Schema.Types.ObjectId,
        ref: 'Question'
    }]
});
module.exports = Item = mongoose.model('Teacher', TeacherSchema);