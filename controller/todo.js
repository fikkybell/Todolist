const todoService = require('../service/todo');

class TodoController {
  async createTodo(req, res) {
    try {
      const id = await todoService.createTodo(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json("An error occurred");

    }
  }

  async updateTodo(req, res) {
    try {
      const { id } = req.params;
      const body = req.body;
      const result = await todoService.updateTodo(id, body);
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json("An error occurred");
    }
  }

  async getTodo(_, res){
    try {
      const result = await todoService.getTodo();
      console.log(result)
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
    }
  }
  
}



module.exports = new TodoController();
