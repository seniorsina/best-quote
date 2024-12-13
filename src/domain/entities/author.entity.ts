import { Types } from "mongoose";

export class AuthorEntity{
  _id?:string;
  name:string;
  dateOfBirth?: string;
  dateOfDeath?: string;
  bio?:string;
  imagePath?:string;
  country: string;
  constructor(partial:Partial<AuthorEntity>){
    Object.assign(this,partial);
  }
}