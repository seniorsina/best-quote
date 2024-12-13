import { AuthorEntity } from "../../domain/entities/author.entity";
import { IAuthorRepository } from "../../domain/interfaces/author-repository.interface";
import { AppError } from "../../shared/utils/app-error";
import { authorModel } from "../database/author.model";
import { BaseRepository } from "./base.repository";

export class AuthorRepository
  extends BaseRepository<AuthorEntity>
  implements IAuthorRepository
{
  constructor() {
    super(authorModel);
  }
  createAuthor = async (author: AuthorEntity): Promise<AuthorEntity> => {
    const exists = await this.findByCriteria({ name: author.name });
    if (exists.length > 0) {
      throw new AppError(`A author with the name ${author.name} exists`, 400);
    }

    const newAuthor = await this.create(author);
    return newAuthor;
  };
  authorsList = async (): Promise<AuthorEntity[]> => {
    const authorList = await this.findAll();
    return authorList;
  };
  updateAuthor = async (
    author: Partial<AuthorEntity>
  ): Promise<AuthorEntity | null> => {
    if (!author._id) {
      throw new AppError("Author Id is required for update", 400);
    }
    const exists = await this.findByCriteria({ _id: author._id });
    if (exists.length > 0) {
      const updatedAuthor = await this.update(author._id, author);
      return updatedAuthor;
    } else {
      throw new AppError("Author not found.", 400);
    }
  };
}
