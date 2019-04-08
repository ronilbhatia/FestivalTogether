const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FestivalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  lineup: [
    {
      // artist: {
      //   type: Schema.Types.ObjectId,
      //   ref: 'artists',
      //   required: true
      // },
      artist: {
        type: String,
        required: true
      },
      start: {
        type: Date,
        required: true
      },
      end: {
        type: Date,
        required: true
      },
      stage: {
        type: String,
        required: true
      },
      going: [
        // {
        //   type: Schema.Types.ObjectId,
        //   ref: 'users'
        // }
        {
          type: String,
          required: true
        }
      ],
      interested: [
        {
          type: Schema.Types.ObjectId,
          ref: 'users'
        }
      ],
      notGoing: [
        {
          type: Schema.Types.ObjectId,
          ref: 'users'
        }
      ],
      stars: [
        {
          type: Schema.Types.ObjectId,
          ref: 'users'
        }
      ]
    }
  ]
});

module.exports = Festival = mongoose.model('Festival', FestivalSchema);
