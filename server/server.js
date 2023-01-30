import express from "express";
import config from "./config.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";

import graphqlFuntion from "./graphql/index.js";
import ProductsRouter from "./routes/products.router.js";
import UserRouter from "./routes/user.router.js";
import { connectDB } from "./data/DBConfig.js";

connectDB();

// inicializando passport
import passport from "passport";
import "./passport/localpassport.js";

const userRouter = new UserRouter();
const productsRouter = new ProductsRouter();
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/graphql", graphqlFuntion);
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "secretKey",
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://ecommerce:coderhouse@cluster0.qrpyisw.mongodb.net/ecommerce?retryWrites=true&w=majority",
    }),
  })
);
// Passport
app.use(passport.initialize());
app.use(passport.session());

// routes

app.use("/", userRouter.init());
app.use("/products", productsRouter.init());

// Servidor

const PORT = config.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});

server.on("error", (error) =>
  console.log(`Servidor express con error: ${error}`)
);
