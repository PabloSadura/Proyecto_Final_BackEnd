import mongoose from "mongoose";
import config from "../config.js";

export async function connectDB() {
  try {
    await mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedtopology: true,
    });
    console.log("Conectado a la DB");
  } catch (error) {
    console.log(error);
  }
}
