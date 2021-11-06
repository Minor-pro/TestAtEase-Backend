const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema;
const TeacherSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    questions:[{
        type: ObjectId,
        ref: 'Question'
    }]
});
module.exports = Item = mongoose.model('Teacher', TeacherSchema);