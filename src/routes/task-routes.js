const express = require('express');
const taskController = require('../controllers/task-controller');

const router = express.Router();

router.post('/', taskController.createTask);
router.get('/:userId', taskController.getTasksByUserId);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

export default router;