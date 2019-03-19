const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../../models/User");

// @route  GET /api/users/test
// @desc   Tests users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

// @route  GET /api/users/register
// @desc   Register new user
// @access Public
router.post("/register", (req, res) => {
  // const { isValid, errors } = validateUserInput;
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      // Throw 400 error if email already exists
      return res
        .status(400)
        .json({ email: "A user is already registered with that email" });
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
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
