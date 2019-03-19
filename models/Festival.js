const mongoose = require("mongoose");
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
      artist: {
        type: Schema.Types.ObjectId,
        ref: "artists"
      },
      time: {
        type: Date,
        required: true
      },
      stage: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = Festival = mongoose.model("Festival", FestivalSchema);
