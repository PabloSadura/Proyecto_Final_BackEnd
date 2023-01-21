import express from "express";
import cors from "cors";

// inicializando passport
import passport from "passport";
import "./passport/localpassport.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
