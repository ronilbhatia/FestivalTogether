const express = require('express');
const router = express.Router();

const validateArtistInput = require('../../validation/artist');
const Artist = require('../../models/Artist');

// @route  GET /api/artists/test
// @desc   Tests artists route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Artists works' }));

// @route  POST /api/artists
// @desc   Create artist
// @access Private
router.post('/', (req, res) => {
  const { isValid, errors } = validateArtistInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Artist.findOne({ name: req.body.name })
    .then(artist => {
      if (artist) {
        return res
          .status(422)
          .json({ artist: 'An artist with that name already exists' });
      }

      const newArtist = new Artist({
        name: req.body.name,
        genre: req.body.genre,
        image: req.body.image
      });

      newArtist.save().then(artist => res.json(artist));
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;
