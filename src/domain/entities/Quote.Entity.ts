import { Types } from "mongoose";
import { AuthorEntity } from "./author.entity";

class Quote {
  _id?: string;
  content: string;
  authorName?: string;
  author?: Partial<AuthorEntity>;
  category: string;

  constructor(partial: Partial<Quote>) {
    Object.assign(this, partial);
  }
}
