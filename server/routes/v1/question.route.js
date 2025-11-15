import express from 'express';
import questionController from '../../controllers/question.controller.js';

const router = express.Router();

router.get('/', questionController.getRandomQuestion);
router.get('/:id', questionController.getQuestion);
router.post('/', questionController.createQuestion);
router.put('/:id', questionController.updateQuestion);
router.delete('/:id', questionController.deleteQuestion);

export default router;