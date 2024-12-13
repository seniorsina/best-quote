import { UserEntity } from "../entities/user.Entity";
import { IBaseRepository } from "./base-repository.interface";

export interface IUserRepository {
  createUser(user: UserEntity): Promise<UserEntity>;
  userCount(): Promise<number>;
}
