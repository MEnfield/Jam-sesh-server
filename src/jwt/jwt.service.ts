import { Injectable } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';

@Injectable()
export class JwtService {
  constructor(private readonly jwtService: NestJwtService) {}

  /**
   * Generates a JWT access token for an authenticated user.
   *
   * @param user - The authenticated user object containing user details.
   * @returns An object containing the generated JWT access token.
   */
  createTokenFromUser(user: any) {
    const payload = { sub: user.id, email: user.email };
    return this.jwtService.sign(payload);
  }
}
