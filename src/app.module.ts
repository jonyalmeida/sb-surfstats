import { Module } from '@nestjs/common';
import { SurfspotsModule } from './surfspots/surfspots.module';

@Module({
  imports: [SurfspotsModule],
})
export class AppModule {}
