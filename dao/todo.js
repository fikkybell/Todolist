const db = require('../db/db');

class TodoDAO {

  async createTodo(title, description) {
    const [id] = await db('todo')
      .insert({
        title,
        description
      })
      .returning('id');

    return id;
  }


  async updateTodo(id, title, description) {
    const result = await db('todo')
     .where({ id })
     .update({title,
      description});
   return result;
  }

   async getTodo(){
     const result = await db('todo')
     return result;
   }

}

module.exports = new TodoDAO();
