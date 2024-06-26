import UserRepository from "./user.repository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "./user.schema.js";

export default class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  //Sign up controller function to handle signup
  async signUp(req, res, next) {
    const { userName, email, password } = req.body;
    try {
      const userFromUserName = await this.userRepository.findUserByUserName(
        userName
      );
      //duplicate username validation
      if (userFromUserName) {
        return res.status(400).json({
          success: false,
          data: null,
          message: `User name is already registered`,
        });
      }
      const userFromEmail = await this.userRepository.findUserByEmail(email);
      //duplicate email validation
      if (userFromEmail) {
        return res.status(400).json({
          success: false,
          data: null,
          message: `Email is already registered`,
        });
      }
      const data = await this.userRepository.signUp({
        userName,
        password,
        email,
      });
      res.status(201).json({
        success: true,
        data: null,
        message: "User Signup successful.",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, data: null, message: error.message });
    }
  }

  //Sign in controller function to handle signin
  async signin(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await this.userRepository.findUserByEmail(email);
      if (!user) {
        return res.status(500).json({
          success: false,
          data: null,
          message: "The Email address you entered doesn't match any account.",
        });
      } else {
        let isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          return res.status(500).json({
            success: false,
            data: null,
            message: "Invalid Credentials",
          });
        } else {
          const token = jwt.sign(
            { userName: user.userName, email: user.email },
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
          );
          return res.status(201).json({
            success: true,
            data: token,
            message: "User signed in successfully",
          });
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        data: null,
        message: "Some error occured while Signing In, Please try again later",
      });
    }
  }

  //check duplicate username controller function
  async checkUserName(req, res, next) {
    const { userName } = req.body;
    try {
      const user = await this.userRepository.findUserByUserName(userName);
      if (user) {
        return res.status(200).json({
          success: true,
          data: { isPresent: true },
          message: "User name already registered",
        });
      } else {
        return res.status(200).json({
          success: false,
          data: { isPresent: false },
          message: "User name is not registered",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        data: null,
        message: "Something went wrong. Please try again",
      });
    }
  }

  //check duplicate email controller function
  async checkEmail(req, res, next) {
    const { email } = req.body;
    try {
      const user = await this.userRepository.findUserByEmail(email);
      if (user) {
        return res.status(200).json({
          success: true,
          data: { isPresent: true },
          message: "Email already registered",
        });
      } else {
        return res.status(200).json({
          success: false,
          data: { isPresent: false },
          message: "Email is not registered",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        data: null,
        message: "Something went wrong. Please try again",
      });
    }
  }
}
