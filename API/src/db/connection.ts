import mongoose from 'mongoose';
// DotEnv configuration
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env'});

const DATABASE_URL = process.env.DATABASE_URL;

// ConnectionDB Function
export async function ConnectionDB() {

  // If doesn't have a value inside the variable throw a error
  if (!DATABASE_URL) {
    console.log("❌ DATABASE_URL não está definida no .env");
    process.exit(1);
  }

  try {
    // waits mongoose to connect into DB
    await mongoose.connect(DATABASE_URL);
    console.log('Connected with MongoDB');
  } catch (error) {
    console.log("❌ Error when connect to MongoDB:", error); // throw the error
    process.exit(1);
  }
}