import mongoose, { mongo } from 'mongoose'

const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://henriqueoliveiragp:6MDZKKeKTqBOZZWS@cyber-reports.xquezxt.mongodb.net/CyberReports?retryWrites=true&w=majority&appName=cyber-reports";

export async function ConnectionDB(){
  try {
    await mongoose.connect(DATABASE_URL!);
    console.log('Connected with MongoDB')
  } catch (error) {
    console.log("❌ Error when connect to MongoDB");
    process.exit(1)
  }
}