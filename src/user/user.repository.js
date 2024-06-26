import UserModel from "./user.schema.js";

export default class UserRepository {
  async signUp(data) {
    return await new UserModel(data).save();
  }
  async signIn() {}

  async findUserByEmail(email) {
    const user = await UserModel.findOne({ email });
    return user;
  }

  async findUserByUserName(userName) {
    const user = await UserModel.findOne({ userName });
    return user;
  }
}
