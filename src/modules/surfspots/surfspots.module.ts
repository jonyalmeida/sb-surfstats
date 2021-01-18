import { Module } from '@nestjs/common';
import { SurfspotsController } from './surfspots.controller';
import { SurfspotsService } from './surfspots.service';

@Module({
  controllers: [SurfspotsController],
  providers: [SurfspotsService],
})
export class SurfspotsModule {}
