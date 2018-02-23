const express = require('express');

const router = express.Router();

router.get('/:id/similar', (req, res) => {
  res.status(200).send();
});

module.exports = router;
