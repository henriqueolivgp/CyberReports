import mongoose from "mongoose";
import { UserSchema } from "../schemas/user.schema";

export interface User extends Document {
  _id: string;
  full_name: string;
  username: string,
  email: string;
  password?: string,
  avatarUrl: string;
}

export const UserModel = mongoose.model<User>("User", UserSchema)
