import mongoose from "mongoose";

//mongoose Connection configuration
async function ConnectMongoose() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database is connected with the application");
  } catch (error) {
    console.log(error);
    throw new Error(
      "Can't connect to the database, please try again later",
      500
    );
  }
}

export default ConnectMongoose;
