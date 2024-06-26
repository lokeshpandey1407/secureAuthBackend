import express from "express";
import ConnectMongoose from "./src/config/mongo.config.js";
import cors from "cors";
import userRoutes from "./src/user/user.routes.js";
import UserController from "./src/user/user.controller.js";

const app = express();
const userController = new UserController();

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.post("/signup", (req, res, next) => {
  userController.signUp(req, res, next);
});

app.use("/api/auth", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Application listens at port ${process.env.PORT}`);
  ConnectMongoose();
});
