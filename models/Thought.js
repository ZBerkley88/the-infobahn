// Destructures Schema from Mongoose
const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const formatDate = require("../utils/formatDate")

// Creates a new instance of the Mongoose schema to define shape of each document
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      get: formatDate,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [
      // {
      //   type: Schema.Types.ObjectId,
      //   ref: "reactions",
      // },
      reactionSchema
    ],
  },
  {
    // Adds a `virtuals` property and set its value to true. By default, Mongoose will not include virtuals
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Creates a virtual property, `reactionCount,` that gets length of the thought's `reactions` array field
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initializes our User model
const Thought = model("thoughts", thoughtSchema);

module.exports = Thought;
