const express = require('express');
const path = require('path');
const similar = require('./routes/similar');
const image = require('./routes/images');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client'), { index: ['thumbnail.html'] }));
app.use('/item', similar);
app.use('/thumbnail', image);

module.exports = app;
