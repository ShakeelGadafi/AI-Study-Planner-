// server/src/config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // loads server/.env

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("❌ MONGO_URI not set in .env");
    process.exit(1);
  }

  console.log("🔗 Attempting to connect to MongoDB...");
  console.log("🔗 URI:", uri.substring(0, 50) + "...");

  try {
    await mongoose.connect(uri);

    console.log("✅ MongoDB connected successfully!");
    console.log("📊 Host:", mongoose.connection.host);
    console.log("📦 Database:", mongoose.connection.name);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    console.error("Full error:", err);
    process.exit(1);
  }
};

// Optional: graceful shutdown
const closeDB = async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed.");
};

export { connectDB, closeDB };
