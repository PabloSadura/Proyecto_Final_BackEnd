import express from "express";
import config from "./config.js";
import cors from "cors";
import ProductsRouter from "./routes/products.router.js";
// inicializando passport
// import passport from "passport";
// import "./passport/localpassport.js";

const productsRouter = new ProductsRouter();
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(passport.initialize());
// app.use(passport.session());

// routes
// app.use("/", loginRoute);
app.use("/products", productsRouter.init());
// Servidor

const PORT = config.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});

server.on("error", (error) =>
  console.log(`Servidor express con error: ${error}`)
);
