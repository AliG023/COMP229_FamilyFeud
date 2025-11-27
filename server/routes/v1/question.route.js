import express from 'express';

import authMiddleware from '../../middlewares/auth.middleware.js';
import questionController from '../../controllers/question.controller.js';

const router = express.Router();

// Protected routes
router.get('/random', questionController.getRandomQuestion);
router.get('/all/:id', questionController.getQuestionById);

// Authorization middleware to ensure user can only modify their own questions
router.get('/all', authMiddleware.requireSignin, authMiddleware.hasAuthorization, questionController.getAllQuestions);
router.post('/all', authMiddleware.requireSignin, authMiddleware.hasAuthorization, questionController.createQuestion);
router.put('/all/:id', authMiddleware.requireSignin, authMiddleware.hasAuthorization, questionController.updateQuestion);
router.delete('/all/:id', authMiddleware.requireSignin, authMiddleware.hasAuthorization, questionController.deleteQuestionById);

export default router;