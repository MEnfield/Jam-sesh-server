import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from 'src/jwt/jwt.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Validates a user's credentials by email and password.
   *
   * @param entry - The email or username of the user to validate.
   * @param password - The password of the user to validate.
   * @returns A promise that resolves to the user details (excluding the password) if the credentials are valid, or null if invalid.
   */
  async validateUser(entry: string, password: string): Promise<any> {
    console.log(entry, password);
    const user = await this.userService.findOneByEmailOrUsername(entry);

    if (user && (await bcrypt.compare(password, user.passwordHash))) {
      const { passwordHash: _password_hash, ...result } = user;
      return {
        user: result,
        token: this.jwtService.createTokenFromUser(result),
      }; // Return user details excluding the password
    }

    return null;
  }
}
