const express = require('express');
const router = express.Router();

const validateFestivalInput = require('../../validation/festival');
const Festival = require('../../models/Festival');

// @route  GET /api/festivals/test
// @desc   Tests festivals route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Festivals works' }));

// @route  POST /api/festivals
// @desc   Create new festival
// @access Private
router.post('/', (req, res) => {
  const { isValid, errors } = validateFestivalInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  return res.json({ success: true });
});

module.exports = router;
