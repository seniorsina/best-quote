import bcrypt from "bcrypt";
import { Types } from "mongoose";
export class UserEntity {
  _id: string;
  username: string;
  email: string;
  password: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  async hashPassword(): Promise<void> {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
}
