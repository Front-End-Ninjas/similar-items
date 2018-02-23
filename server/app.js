const express = require('express');
const router = require('./routes/similar');

const app = express();

app.use('/item', router);

app.get('/', (req, res) => res.status(200).send());

module.exports = app;
