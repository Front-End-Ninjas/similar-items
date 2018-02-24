const express = require('express');
const similar = require('./routes/similar');
const image = require('./routes/images');

const app = express();

app.use('/item', similar);

app.use('/thumbnail', image);

app.get('/', (req, res) => res.status(200).send());

module.exports = app;
