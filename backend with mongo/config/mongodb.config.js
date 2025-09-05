import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL); // mongoose.connect() is used to connect to the MongoDB database using the connection string provided in the environment variable MONGO_URL.
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
