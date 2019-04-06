const Validator = require('validator');

const isEmpty = require('./is-empty');

module.exports = function validateFestivalInput(data) {
  const errors = {};

  data.name = isEmpty(data.name) ? '' : data.name;
  data.year = isEmpty(data.year) ? '' : data.year;

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (!Validator.isNumeric(data.year)) {
    errors.year = 'Please input a valid year (must be all numbers)';
  }

  if (Validator.isEmpty(data.year)) {
    errors.year = 'Year field is required';
  }

  return {
    isValid: isEmpty(errors),
    errors
  };
};
