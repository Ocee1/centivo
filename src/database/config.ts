import { connect } from 'mongoose';
import { config } from 'dotenv';
config();

const connectDB = async () => {
  try {
    const conn = await connect(process.env.DB_URI as string);
    console.log(`DB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Connection to DB failed');
  }
};

export default connectDB;