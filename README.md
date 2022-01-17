Todo_app_shade
A simple todo app

Install package
run: npm install

Run app
npx knex migrate:make init --migrations-directory db/migrations

npx knex migrate:latest --knexfile db/knexfile.js

Run app
node index.js || nodemon init

Trace warnings
node --trace-warnings index.js
