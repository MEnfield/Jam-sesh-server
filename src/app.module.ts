import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { ConfigModule } from '@nestjs/config'; // For environment variable management
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuditModule } from './audit/audit.module';
import { LocationsModule } from './locations/locations.module';
import { databaseConfig } from 'data/db-config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables from .env file
    TypeOrmModule.forRoot(databaseConfig),
    UserModule,
    AuthModule,
    AuditModule,
    LocationsModule,
  ],
})
export class AppModule {}
