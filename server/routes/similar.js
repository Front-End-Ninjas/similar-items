const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('YOU GOT SIMILAR');
});

module.exports = router;
