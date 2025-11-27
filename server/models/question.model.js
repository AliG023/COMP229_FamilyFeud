import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
    text: { type: String, required: true, trim: true }, 
    points: { type: Number, required: true }
});

const QuestionSchema = new mongoose.Schema({
    text: { type: String, trim: true, required: "Question is required" },
    isFastMoney: { type: Boolean, default: false },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
    tags: { type: [String], default: [] },
    answers: [ AnswerSchema ]
});

export default mongoose.model('Question', QuestionSchema)