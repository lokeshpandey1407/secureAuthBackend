import express from "express";
import UserController from "./user.controller.js";

const userRoutes = express.Router();
const userController = new UserController();

//user signup route
userRoutes.post("/signup", (req, res, next) => {
  userController.signUp(req, res, next);
});

//user Signin route
userRoutes.post("/signin", (req, res, next) => {
  userController.signin(req, res, next);
});

//check duplicate email route
userRoutes.post("/checkEmail", (req, res, next) => {
  userController.checkEmail(req, res, next);
});

//check duplicate username route
userRoutes.post("/checkUserName", (req, res, next) => {
  userController.checkUserName(req, res, next);
});

export default userRoutes;
