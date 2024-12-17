import { Controller, Post, Body, ForbiddenException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from 'src/jwt/jwt.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { entry: string; password: string }) {
    const response = await this.authService.validateUser(
      body.entry,
      body.password,
    );

    if (!response) {
      throw new ForbiddenException('Invalid credentials');
    }

    return response;
  }
}
