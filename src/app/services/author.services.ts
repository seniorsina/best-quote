import { NextFunction, Request, Response } from "express";
import { AuthorRepository } from "../../infra/repositories/author.repository";
import { AuthorEntity } from "../../domain/entities/author.entity";
import { ApiResponse } from "../../shared/utils/api-response";
import { AppError } from "../../shared/utils/app-error";
import { handleError } from "../../shared/utils/handle-error";

class AuthorService {
  private authorRepository: AuthorRepository;
  constructor() {
    this.authorRepository = new AuthorRepository();
  }
  createAuthor = async (req: Request, res: Response): Promise<void> => {
    try {
      const authorEntity = new AuthorEntity(req.body);
      const newUser = await this.authorRepository.createAuthor(authorEntity);

      ApiResponse.success(res, "User registered successfully", newUser);
      return;
    } catch (err: unknown) {
      handleError(res, err);
    }
  };

  authorList = async (req: Request, res: Response) => {
    try {
      const list = await this.authorRepository.authorsList();
      ApiResponse.success(res, "", list);
    } catch (err: unknown) {
      handleError(res, err);
    }
  };
}

export const authorService = new AuthorService();
