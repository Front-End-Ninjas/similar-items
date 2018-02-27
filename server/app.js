const express = require('express');
const path = require('path');
const similar = require('./routes/similar');
const image = require('./routes/images');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/item', similar);
app.use('/thumbnail', image);

app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '..', 'client', 'thumbnail.html')));

module.exports = app;
