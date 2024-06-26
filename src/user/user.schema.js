import mongoose from "mongoose";
import bcrypt from "bcrypt";

//User Schema
const UserSchema = new mongoose.Schema({
  userName: { type: String, required: [true, "Username is required"] },
  email: { type: String, required: [true, "Email is required"] },
  password: {
    type: String,
    required: [true, "Password is required"],
    min: [8, ""],
    validate: {
      validator: function (val) {
        return /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/g.test(
          val
        );
      },
      message:
        "Password must contain 1 capital letter, 1 number, 1 special charater and must be 8 characters long.",
    },
  },
});

//Mongoose pre function to hash the password
UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
  this.userName = this.userName.trim();
  this.email = this.email.trim();
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
