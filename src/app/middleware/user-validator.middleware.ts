import { NextFunction,Request, Response } from "express";
import DtoValidator from "./validate-dto.middleware";
import { plainToClass } from "class-transformer";
import { CreateUserDto } from "../dtos/user.dto";

export class UserValidator extends DtoValidator{
  static async validateRegister(
    req:Request,
    res:Response,
    next:NextFunction
  ):Promise<void>{
    const userDto = plainToClass(CreateUserDto,req.body);
    await DtoValidator.validateDto(userDto, res, next);
  }
}