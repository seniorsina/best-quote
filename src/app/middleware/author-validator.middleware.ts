import { NextFunction,Request, Response } from "express";
import { CreateAuthorDto } from "../dtos/author.dto";
import DtoValidator from "./validate-dto.middleware";
import { plainToClass } from "class-transformer";

export class AuthorValidator extends DtoValidator {
  static async validateCreate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const authorDto = plainToClass(CreateAuthorDto, req.body);
    await DtoValidator.validateDto(authorDto, res, next);
  }
}
