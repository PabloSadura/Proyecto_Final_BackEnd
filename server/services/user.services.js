import passport from "passport";
import dao from "../data/daos/factory.js";

export default class UserServices {
  constructor() {
    this.dao = dao;
  }
  passportRegister = async () => {
    passport.authenticate("registro", {
      failureRedirect: "/errorRegistro",
      successRedirect: "/productos",
    });
  };
  passportLogin = async () => {
    passport.authenticate("login", {
      failureRedirect: "/errorLogin",
      successRedirect: "/",
    });
  };
}
