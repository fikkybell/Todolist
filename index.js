const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(router);

const PORT = process.env.PORT | 8080;

app.listen(PORT, () => console.log('server listening on port 8080'));

module.exports = app;
