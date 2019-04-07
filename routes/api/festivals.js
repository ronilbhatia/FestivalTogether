const express = require('express');
const router = express.Router();

const validateSetInput = require('../../validation/set');
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

  Festival.findOne({ name: req.body.name, year: req.body.year })
    .then(festival => {
      if (festival) {
        return res
          .status(422)
          .json({ festival: 'This festival already exists ' });
      }

      const newFestival = new Festival({
        name: req.body.name,
        year: req.body.year
      });

      newFestival.save().then(festival => res.json(festival));
    })
    .catch(err => res.status(400).json(err));
});

// @route  POST /api/festivals/:festivalId/sets
// @desc   Create new set for festival
// @access Private
router.post('/:festivalId/sets', (req, res) => {
  const { isValid, errors } = validateSetInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Festival.findById(req.params.festivalId)
    .then(festival => {
      if (!festival) {
        return res
          .status(404)
          .json({ festival: 'Could not find a festival with this id' });
      }

      // Make sure artist exists
      Artist.findById(req.body.artist)
        .then(artist => {
          if (!artist) {
            return res
              .status(404)
              .json({ artist: 'Could not find this artist' });
          }
        })
        .catch(err => res.status(400).json(err));

      const newSet = {
        artist: req.body.artist,
        start: req.body.start,
        end: req.body.end,
        stage: req.body.stage
      };

      // Add set to festival's lineup array
      festival.lineup.push(newSet);

      festival.save().then(festival => res.json(festival));
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;
