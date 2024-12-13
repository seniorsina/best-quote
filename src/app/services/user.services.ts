import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../../infra/repositories/user.repository";
import debug from "debug";
import { CreateUserDto } from "../dtos/user.dto";
import { ApiResponse } from "../../shared/utils/api-response";
import { plainToClass } from "class-transformer";
import { UserEntity } from "../../domain/entities/user.Entity";
import { AppError } from "../../shared/utils/app-error";
import { handleError } from "../../shared/utils/handle-error";

class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.userRepository.findAll();
      ApiResponse.success(res, "", data);
    } catch (err) {
      handleError(res, err);
    }
  };

  registerUser = async (
    req: Request,
    res: Response,
    next: Function
  ): Promise<void> => {
    try {
      const userEntity = new UserEntity(req.body);
      console.log("user entity", userEntity);
      const newUser = await this.userRepository.createUser(userEntity);

      ApiResponse.success(res, "User registered successfully", newUser);
      return;
    } catch (err: unknown) {
      handleError(res, err);
    }
  };
}

export const userService = new UserService();
