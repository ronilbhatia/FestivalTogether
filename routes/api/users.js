const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load in User model
const User = require('../../models/User');

// Load configuration variables
const keys = require('../../config/keys');

// @route  GET /api/users/test
// @desc   Tests users route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Users works' }));

// @route  POST /api/users/register
// @desc   Register new user
// @access Public
router.post('/register', (req, res) => {
  const { isValid, errors } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      // Throw 400 error if email already exists
      return res
        .status(400)
        .json({ email: 'A user is already registered with that email' });
    } else {
      // Create new user
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, name: user.name, email: user.email };

              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: `Bearer ${token}`
                  });
                }
              );
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route  POST /api/users/login
// @desc   Login new user
// @access Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  const { email, password } = req.body;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: 'User does not exist' });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, name: user.name, email: user.email };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 604800 },
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`
            });
          }
        );
      } else {
        res.status(400).json({ password: 'Incorrect password' });
      }
    });
  });
});

// @route  GET /api/users/current
// @desc   Get current user
// @access Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
