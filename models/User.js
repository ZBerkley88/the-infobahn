// Destructures Schema from Mongoose
const { Schema, model } = require("mongoose");

// Creates a new instance of the Mongoose schema to define shape of each document
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
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

// Creates a virtual property, `friendCount,` that gets the amount of friends for a user
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Validates unique user email (DOES NOT WORK)
// from: https://www.youtube.com/watch?v=Z8Aebt9tvT8&ab_channel=NamasteProgramming

// userSchema.path("email").validate(async (email) => {
//   const emailCount = await mongoose.models.users.countDocuments({ email });
//   return !emailCount;
// }, "An account with this email already exists.");


// Initializes our User model
const User = model("users", userSchema);

module.exports = User;
