const Validator = require('validator');

const isEmpty = require('./is-empty');

module.exports = function validateSetInput(data) {
  const errors = {};
  const stages = [
    'Coachella Stage',
    'Outdoor Theatre',
    'Gobi',
    'Mojave',
    'Sahara',
    'Sonora',
    'Yuma',
    'Do Lab'
  ];

  data.artist = isEmpty(data.artist) ? '' : data.artist;
  data.start = isEmpty(data.start) ? '' : data.start;
  data.end = isEmpty(data.end) ? '' : data.end;
  data.stage = isEmpty(data.stage) ? '' : data.stage;

  if (Validator.isEmpty(data.artist)) {
    errors.artist = 'Artist field is required';
  }

  // This validator is used, to valistart that valid start is supplied
  if (!Validator.isISO8601(data.start)) {
    errors.start = 'Please input a valid date';
  }

  if (Validator.isEmpty(data.start)) {
    errors.start = 'Start field is required';
  }

  if (!Validator.isISO8601(data.end)) {
    errors.end = 'Please input a valid date';
  }

  if (Validator.isEmpty(data.end)) {
    errors.end = 'End field is required';
  }

  if (!stages.includes(data.stage)) {
    errors.stage = 'Please input a valid stage';
  }

  if (Validator.isEmpty(data.stage)) {
    errors.stage = 'Stage field is required';
  }

  return {
    isValid: isEmpty(errors),
    errors
  };
};
