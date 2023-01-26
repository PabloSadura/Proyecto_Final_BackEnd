import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const userRouter = Router();

export default class UserRouter {
  constructor() {
    this.userController = new UserController();
  }

  init() {
    userRouter.get("/", this.userController.isAuth, this.userController.login);
    userRouter.post("/registro", this.userController.postRegister);
    userRouter.post("/login", this.userController.postLogin);
    userRouter.get("/logout", this.userController.logout);
    return userRouter;
  }
}
