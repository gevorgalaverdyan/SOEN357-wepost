import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  newpassword: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  name: string;
}
