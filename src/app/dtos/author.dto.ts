import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateAuthorDto {
  @IsNotEmpty()
  name: string;
  @MaxLength(10)
  dateOfBirth: string;
  @MaxLength(10)
  dateOfDeath: string;
  bio: string;
  imagePath: string;
  country: string;
}
