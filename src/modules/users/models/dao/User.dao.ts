import { model, Schema } from "mongoose";
import UserEntity from "../entity/User.entity";

const UserSchema = new Schema<UserEntity>(
  {
    alias: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    emailValidated: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const UserModel = model<UserEntity>("User", UserSchema, "User");

export default UserModel;
