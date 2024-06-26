import express from "express";
import ConnectMongoose from "./src/config/mongo.config.js";
import cors from "cors";
import userRoutes from "./src/user/user.routes.js";

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.use("/api/auth", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Application listens at port ${process.env.PORT}`);
  ConnectMongoose();
});
