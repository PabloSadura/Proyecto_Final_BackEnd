import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV + "env"),
});

export default {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 8080,
  TIPO_PERSISTENCIA: process.argv[2] || "FILE",
  MONGO_URL:
    "mongodb+srv://ecommerce:coderhouse@cluster0.qrpyisw.mongodb.net/ecommerce?retryWrites=true&w=majority",
};
