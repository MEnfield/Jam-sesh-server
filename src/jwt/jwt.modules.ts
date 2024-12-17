import { Module } from '@nestjs/common';
import { JwtModule as NestJWTModule } from '@nestjs/jwt';
import { JwtService } from 'src/jwt/jwt.service';

console.log(process.env.JWT_SECRET);
@Module({
  imports: [
    NestJWTModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
