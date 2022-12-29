import nodemailer from "nodemailer";
import { config } from "../config.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: config.EMAIL,
    pass: config.PASSWORD,
  },
});
