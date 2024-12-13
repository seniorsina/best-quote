import { UserEntity } from "../domain/entities/user.Entity";
import { UserModel } from "../infra/database/user.model";

export const seedUsers = async () => {
  const users = [
    new UserEntity({
      username: "admin",
      email: "admin@example.com",
      password: "admin123",
    }),
    new UserEntity({
      username: "john_doe",
      email: "john@example.com",
      password: "john123",
    }),
  ];

  for (const user of users) {
    const exists = await UserModel.findOne({ email: user.email });
    if (!exists) {
      await UserModel.create(user);
      console.log(`User "${user.username}" added.`);
    } else {
      console.log(`User "${user.username}" already exists.`);
    }
  }
};
