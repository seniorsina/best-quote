import { AuthorEntity } from "../entities/author.entity";

export interface IAuthorRepository{
  createAuthor(author:AuthorEntity):Promise<AuthorEntity>;
  authorsList():Promise<AuthorEntity[]>;
  updateAuthor(author:Partial<AuthorEntity>):Promise<AuthorEntity|null>;
}