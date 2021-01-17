import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SurfspotsModule } from './surfspots/surfspots.module';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SurfspotsModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
  ],
})
export class AppModule {}
