const express = require('express');
const router = express.Router({ mergeParams: true });
const passport = require('passport');

const validateSetInput = require('../../validation/set');
const Festival = require('../../models/Festival');

// @route  POST /api/festivals/:festivalId/sets
// @desc   Create new set for festival
// @access Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { isValid, errors } = validateSetInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Festival.findById(req.params.festivalId)
      .then(festival => {
        debugger
        if (!festival) {
          return res
            .status(404)
            .json({ festival: 'Could not find a festival with this id' });
        }

        // Make sure artist exists - commented out temporarily for beta version
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

// @route  GET /api/festivals/:festivalId/sets/:setId
// @desc   Get set
// @access Private
router.get('/:setId', (req, res) => {
  Festival.findById(req.params.festivalId)
    .then(festival => {
      const set = festival.lineup.find(set => set._id.toHexString() === req.params.setId);
      res.json(set);
    })
    .catch(err => res.status(400).json(err))
});

// @route  DELETE /api/festivals/:festivalId/sets/:setId
// @desc   Delete set for festival
// @access Private
router.delete(
  '/:setId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Festival.findById(req.params.festivalId)
      .then(festival => {
        if (!festival) {
          return res.status(404).json({ festival: 'Festival not found' });
        }

        const set = festival.lineup.find(set => set._id.toHexString() === req.params.setId);
        if (!set) {
          return res.status(404).json({ set: 'Set not found' });
        }

        const removeIndex = festival.lineup
          .map(set => set._id.toHexString())
          .indexOf(req.params.setId);

        festival.lineup.splice(removeIndex, 1);
        festival
          .save()
          .then(festival => res.json(festival))
          .catch(err => res.status(400).json(err));
      })
  });

// @route  POST /api/festivals/:festivalId/sets/:setId/going
// @desc   Add user to going list of set for given festival
// @access Private
router.post(
  '/:setId/going',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Festival.findById(req.params.festivalId)
      .then(festival => {
        if (!festival) {
          return res.status(404).json({ festival: 'Festival not found' });
        }

        const set = festival.lineup.find(set => set._id.toHexString() === req.params.setId);
        if (!set) {
          return res.status(404).json({ set: 'Set not found' });
        }

        if (set.going.find(user => user._id.toHexString() === req.user._id.toHexString())) {
          return res.status(422).json({ set: 'You are already going to this set' });
        }

        set.going.push({ name: req.user.name, _id: req.user._id });
        festival
          .save()
          .then(festival => res.json(set))
          .catch(err => res.status(400).json(err));
      })
      .catch(err => res.status(400).json(err))
  }
);

// @route  DELETE /api/festivals/:festivalId/sets/:setId/going
// @desc   Add user to going list of set for given festival
// @access Private
router.delete(
  '/:setId/going',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Festival.findById(req.params.festivalId)
      .then(festival => {
        if (!festival) {
          return res.status(404).json({ festival: 'Festival not found' });
        }

        const set = festival.lineup.find(set => set._id.toHexString() === req.params.setId);
        if (!set) {
          return res.status(404).json({ set: 'Set not found' });
        }

        if (!set.going.find(user => user._id.toHexString() === req.user._id.toHexString())) {
          return res.status(422).json({ set: 'You are already not going to this set' });
        }

        const removeIndex = set.going
          .map(user => user._id.toHexString())
          .indexOf(req.user._id.toHexString());

        set.going.splice(removeIndex, 1);
        festival
          .save()
          .then(festival => res.json(set))
          .catch(err => res.status(400).json(err));
      })
      .catch(err => res.status(400).json(err))
  }
);

module.exports = router;