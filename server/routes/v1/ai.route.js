import express from 'express';

import aiController from '../../controllers/ai.controller.js';
import authMiddleware from '../../middlewares/auth.middleware.js';

const router = express.Router();

// Public routes
router.post('/:questionId', authMiddleware.requireSignin, aiController.getAiResponse);

export default router;