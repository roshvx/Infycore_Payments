import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connString = process.env.MONGO_URI;

    // Safety check to verify environment variables are loaded
    if (!connString) {
      throw new Error("MONGO_URI is undefined. Please verify that your backend/.env file contains 'MONGO_URI=...' and is saved.");
    }

    const conn = await mongoose.connect(connString);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
