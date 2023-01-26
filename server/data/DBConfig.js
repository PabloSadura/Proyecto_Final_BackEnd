import mongoose from "mongoose";
import config from "../config.js";
mongoose
  .connect(config.MONGO_URL)
  .then((db) => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));
