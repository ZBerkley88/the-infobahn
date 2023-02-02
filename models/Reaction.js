// TODO:
// Use a getter method to format the timestamp on query

// Destructures Schema from Mongoose
const { Schema, model, Types } = require("mongoose");

// Creates a new instance of the Mongoose schema to define shape of each document
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false
  }
);

module.exports = reactionSchema;
