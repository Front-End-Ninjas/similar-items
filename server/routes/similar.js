const express = require('express');

const similar = express.Router();

similar.get('/:id/similar', (req, res) => {
  res.status(200).send('Success');
});

module.exports = similar;
