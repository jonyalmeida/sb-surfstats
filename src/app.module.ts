import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SurfspotsModule } from './modules/surfspots/surfspots.module';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthService } from './modules/auth/auth.service';
import { AuthController } from './modules/auth/auth.controller';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    SurfspotsModule,
    UsersModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AppModule {}
