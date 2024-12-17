import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsNumber,
  IsLatitude,
  IsLongitude,
} from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  name: string; // Name or description of the location

  @IsString()
  @IsOptional()
  address?: string; // Full address (optional)

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  state?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  postal_code?: string;

  @IsNumber()
  @IsLatitude()
  @IsOptional()
  latitude?: number; // Latitude coordinate

  @IsNumber()
  @IsLongitude()
  @IsOptional()
  longitude?: number; // Longitude coordinate
}
