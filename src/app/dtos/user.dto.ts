import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: "UserName is required" })
  @MinLength(4)
  username: string;
  @IsEmail()
  @IsNotEmpty({ message: "email is required" })
  email: string;
  @IsNotEmpty({ message: "Password is required" })
  @MinLength(6)
  password: string;
}
