import { UserEntity } from "../../domain/entities/user.Entity";
import { IUserRepository } from "../../domain/interfaces/user-repository.interface";
import { AppError } from "../../shared/utils/app-error";
import { UserModel } from "../database/user.model";
import { BaseRepository } from "./base.repository";

export class UserRepository
  extends BaseRepository<UserEntity>
  implements IUserRepository
{
  constructor() {
    super(UserModel);
  }

  createUser = async (user: UserEntity): Promise<UserEntity> => {
    await user.hashPassword();

    const exists = await this.findByCriteria({
      $or: [{ email: user.email }, { password: user.password }],
    });

    if (exists.length > 0) {
      throw new AppError(
        "A user with this email or password already exists.",
        400
      );
    }

    const newUser = this.create(user);
    console.log(newUser);

    return newUser;
  };
  userCount = async (): Promise<number> => {
    return this.countByCriteria({});
  };
}
