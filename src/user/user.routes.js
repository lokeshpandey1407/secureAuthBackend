import express from "express";
import UserController from "./user.controller.js";

const userRoutes = express.Router();
const userController = new UserController();

userRoutes.post("/signup", (req, res, next) => {
  userController.signUp(req, res, next);
});

userRoutes.post("/signin", (req, res, next) => {
  userController.signin(req, res, next);
});

userRoutes.post("/checkEmail", (req, res, next) => {
  userController.checkEmail(req, res, next);
});

userRoutes.post("/checkUserName", (req, res, next) => {
  userController.checkUserName(req, res, next);
});

userRoutes.get("/get", (req, res, next) => {
  return "This is get response";
});

export default userRoutes;
