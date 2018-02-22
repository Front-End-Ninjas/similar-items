const express = require('express');
const router = require('./routes/similar');

const app = express();

app.use('/similar', router);

app.get('/', (req, res) => res.status(200).send('Hello World'));

module.exports = app;
