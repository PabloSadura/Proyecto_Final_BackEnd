import express from "express";

const app = express();

const PORT = process.env.PORT || 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Escuchando puerto ${PORT}`);
});
