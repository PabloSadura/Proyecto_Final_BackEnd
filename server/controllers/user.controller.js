import UserServices from "../services/user.services.js";

export default class UserController {
  constructor() {
    this.userServices = new UserServices();
  }
  isAuth(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.json({ user: "" });
    }
  }
  postRegister = (req, res) => {
    this.userServices.passportRegister();
  };
  postLogin = (req, res) => {
    this.userServices.passportLogin();
  };
  logout = (req, res) => {
    req.session.destroy(() => {
      res.json({ user: false });
    });
  };
  errorRegister = (req, res) => {
    res.json({ register: false });
  };
  errorLogin = (req, res) => {
    res.json({ login: false });
  };
  login = (req, res) => {
    res.redirect("/productos");
  };
}
