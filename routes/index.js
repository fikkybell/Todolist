const express = require('express');
const todoController = require('../controller/todo');

const router = express.Router();
router.post('/todo', todoController.createTodo);
router.put('/todo/:id', todoController.updateTodo);
router.get('/', todoController.getTodo);

module.exports = router;
