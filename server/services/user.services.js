import dao from "../data/daos/user/factory.js";

export default class UserServices {
  constructor() {
    this.dao = dao;
  }

  postRegister = async (email) => {
    const usuario = this.dao.getByEmail(email);
    return usuario;
  };

  createUser = async (user) => {
    await this.dao.create(user);
    return user;
  };

  postLogin = async (email) => {
    const usuario = await this.dao.getByEmail(email);
    return usuario;
  };

  getUser(email) {
    return this.dao.getByEmail(email);
  }
}
