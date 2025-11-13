import mongoose from 'mongoose'

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        trim: true,
        required: "Question is required"
    },
    answers: {
        type: Array,
        required: "Answers are required"
    }
});

export default mongoose.model('Question', QuestionSchema)