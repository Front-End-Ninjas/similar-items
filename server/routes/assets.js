const express = require('express');
const fs = require('fs');
const path = require('path');

const assets = express.Router();

assets.get('*', (req, res) => {
  const assetPath = path.join(__dirname, '..', '..', 'imgData', `${req.url}`);

  fs.stat(assetPath, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.sendFile(assetPath);
    }
  });
});

module.exports = assets;
