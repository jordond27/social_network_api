const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // Must match a valid email address (look into Mongoose's matching validation)
    },
    thoughts: {
      // Array of `_id` values referencing the `Thought` model
    },
    friends: {
      // Array of `_id` values referencing the `User` model (self-reference)
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("user", userSchema);

moduel.exports = Course;
