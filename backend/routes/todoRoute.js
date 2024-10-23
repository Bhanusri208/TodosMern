const todoController = require('../controllers/todoController');
const express = require('express');

const router = express.Router();

router.post('/todos', todoController.myTodos);
router.get('/getTodo',todoController.getTodo)
router.put('/updateTodo/:id',todoController.updateTodo)
router.delete('/deleteTodo/:id',todoController.deleteTodo)

module.exports = router;