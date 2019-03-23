const Validator = require("validator");

const isEmpty = require("./is-empty");

module.exports = function validateArtist(data) {
  const errors = {};

  data.name = isEmpty(data.name) ? "" : data.name;

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  return {
    isValid: isEmpty(errors),
    errors
  };
};
