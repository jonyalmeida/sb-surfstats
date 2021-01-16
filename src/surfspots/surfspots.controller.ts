import { Body, Controller, Get, Post } from '@nestjs/common';
import { SurfspotsService } from './surfspots.service';
import { Surfspot } from '../../dist/surfspots/surfspots.model';

@Controller('surfspots')
export class SurfspotsController {
  constructor(private surfspots: SurfspotsService) {}

  @Get()
  getAllSurfspots(): Surfspot[] {
    return this.surfspots.getAllSurfspots();
  }

  @Post()
  createSurfspot(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('url') url: string,
  ): Surfspot {
    console.log('body', title, description, url);
    return this.surfspots.createSurfspot(title, description, url);
  }
}
