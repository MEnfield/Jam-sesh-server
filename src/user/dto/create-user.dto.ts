import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  first_name: string; // Field is required and must be a string

  @IsString()
  @IsNotEmpty()
  last_name: string; // Field is required and must be a string

  @IsEmail()
  @IsNotEmpty()
  email: string; // Field is required and must be a valid email

  @IsString()
  @MinLength(8)
  @IsOptional()
  password?: string; // Optional, but if provided, must be at least 8 characters
}
