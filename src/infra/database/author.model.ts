import mongoose, { Schema } from "mongoose";
import { AuthorEntity } from "../../domain/entities/author.entity";

const authorSchema = new Schema<AuthorEntity>({
  name:{type:String, required:true},
  dateOfBirth: {type:String,maxlength:10},
  dateOfDeath: {type:String,maxlength:10},
  bio:String,
  imagePath:String,
  country: String,
});

export const authorModel = mongoose.model<AuthorEntity>("author", authorSchema);
