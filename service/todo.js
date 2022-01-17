const todoDAO = require('../dao/todo');

class TodoService {

  createTodo(todoDto) {
    const { title, description } = todoDto;
    return todoDAO.createTodo(title, description);
  }

  updateTodo(id, todoDto) {
    const { title, description } = todoDto;
    return todoDAO.updateTodo(id, title, description);
  }

  getTodo(){
    return todoDAO.getTodo();
  }

}

module.exports = new TodoService();
