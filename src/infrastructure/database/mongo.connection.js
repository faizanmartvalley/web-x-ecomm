import mongoose from "mongoose";

export const connectMongo = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected successfully.");
};

export const disconnectMongo = async () => {
  await mongoose.connection.close();
  console.log("MongoDB disconnected.");
};
