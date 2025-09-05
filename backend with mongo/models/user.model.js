import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // mongoose.Schema is used to define the structure of the User documents in the MongoDB collection.
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema); // mongoose.model is used to create a model named "User" based on the userSchema, which allows for interaction with the "users" collection in the database.

export default User;
