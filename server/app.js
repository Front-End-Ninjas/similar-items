const express = require('express');
const path = require('path');
const similar = require('./routes/similar');
const image = require('./routes/images');
const assets = require('./routes/assets');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client'), { index: ['thumbnail.html'] }));

app.use('/item', similar);
app.use('/thumbnail', image);
app.use('/assets', assets);

module.exports = app;
