import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SurfspotsService } from './surfspots.service';
import { Surfspot } from './surfspots.model';
import { CreateSurfspotDto } from './dto/create-surfspot.dto';

@Controller('surfspots')
export class SurfspotsController {
  constructor(private surfspots: SurfspotsService) {}

  @Get()
  getAllSurfspots(): Surfspot[] {
    return this.surfspots.getAllSurfspots();
  }

  @Get('/:id')
  getSurfspotById(@Param('id') id: string) {
    return this.surfspots.getSurfspotById(id);
  }

  @Put('/:id')
  updateSurfspotById(
    @Body('topThreeRating') topThreeRating: string,
    @Param('id') id: string,
  ) {
    return this.surfspots.updateSurfspotById(topThreeRating, id);
  }

  @Delete('/delete/:id')
  deleteSurfspotById(@Param('id') id: string) {
    return this.surfspots.deleteSurfspotById(id);
  }

  @Post()
  createSurfspot(@Body() createSurfspotDto: CreateSurfspotDto): Surfspot {
    console.log('body', createSurfspotDto);
    return this.surfspots.createSurfspot(createSurfspotDto);
  }
}
