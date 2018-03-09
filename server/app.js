const express = require('express');
const path = require('path');
const similar = require('./routes/similar');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client'), { index: ['thumbnail.html'] }));

app.use('/item', similar);

module.exports = app;
