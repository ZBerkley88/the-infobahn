// TODO:
// Use a getter method to format the timestamp on query


// Destructures Schema from Mongoose
const { Schema, model } = require("mongoose");

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
      default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "reactions",
      },
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
