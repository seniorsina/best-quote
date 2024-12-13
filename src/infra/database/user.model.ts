// infra/database/userModel.ts
import mongoose, { Schema, Document } from "mongoose";
import { UserEntity } from "../../domain/entities/user.Entity";

const userSchema = new Schema<UserEntity>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const UserModel = mongoose.model<UserEntity>("User", userSchema);
