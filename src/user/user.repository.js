import UserModel from "./user.schema.js";

export default class UserRepository {
  //signup repository function
  async signUp(data) {
    return await new UserModel(data).save();
  }

  //Find user by email repository function
  async findUserByEmail(email) {
    const user = await UserModel.findOne({ email });
    return user;
  }

  //find user by userName repository function
  async findUserByUserName(userName) {
    const user = await UserModel.findOne({ userName });
    return user;
  }
}
