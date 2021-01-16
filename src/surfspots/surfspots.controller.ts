import { Body, Controller, Get, Post } from '@nestjs/common';
import { SurfspotsService } from './surfspots.service';
import { Surfspot } from '../../dist/surfspots/surfspots.model';
import { CreateSurfspotDto } from './dto/create-surfspot.dto';

@Controller('surfspots')
export class SurfspotsController {
  constructor(private surfspots: SurfspotsService) {}

  @Get()
  getAllSurfspots(): Surfspot[] {
    return this.surfspots.getAllSurfspots();
  }

  @Post()
  createSurfspot(@Body() createSurfspotDto: CreateSurfspotDto): Surfspot {
    console.log('body', createSurfspotDto);
    return this.surfspots.createSurfspot(createSurfspotDto);
  }
}
