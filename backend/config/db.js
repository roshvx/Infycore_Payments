import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connString = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/infycore_payments';
    const conn = await mongoose.connect(connString);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
