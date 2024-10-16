import { model, Schema } from "mongoose";
import UserEntity from "../entity/User.entity";

const UserSchema = new Schema<UserEntity>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

const User = model<UserEntity>("User", UserSchema, "User");

export default User;
