const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ratingSchema = new Schema(
  {
    ratingBody: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = ratingSchema;
