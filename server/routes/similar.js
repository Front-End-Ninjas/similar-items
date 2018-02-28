const express = require('express');
const helpers = require('../db_helpers/helpers');

const similar = express.Router();

similar.get('/:id/similar', (req, res) => {
  const { id } = req.params;

  helpers.getList(id, (err, list) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(list);
    }
  });
});

module.exports = similar;
