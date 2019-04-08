const express = require('express');
const router = express.Router();
const passport = require('passport');

const { Set } = require('../../models/Festival');

// @route  GET /api/sets/test
// @desc   Tests sets route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Sets works' }));

// @route  POST /api/sets/:id/going
// @desc   Add user to going list of set
// @access Private
router.post('/:id/going', passport.authenticate('jwt', { session: false }), (req, res) => {
  Set.findById(req.params.id)
    .then(set => {
      // debugger;
      res.json(set);
    }).catch(err => res.status(400).json(err))
});

module.exports = router;