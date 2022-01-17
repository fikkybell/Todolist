// In a file named, e.g. bookshelf.js

const knex = require('knex')(db)
module.exports = require('bookshelf')(knex)

// elsewhere, to use the bookshelf client:
const bookshelf = require('./bookshelf')

const Todo = bookshelf.model('Todo', {
    tableName: 'todos'
})
