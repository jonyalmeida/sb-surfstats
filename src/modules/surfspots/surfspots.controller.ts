import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SurfspotsService } from './surfspots.service';
import { Surfspot } from './surfspots.model';
import { CreateSurfspotDto } from './dto/create-surfspot.dto';
import { GetSurfspotFilterDto } from './dto/get-surfspots-filter.dto';
import { SurfspotTopThreeRankingValidationPipe } from './pipes/pipe-topThreeRanking-validation.pipe';

@Controller('surfspots')
export class SurfspotsController {
  constructor(private surfspots: SurfspotsService) {}

  @Get()
  getSurfspots(
    @Query(ValidationPipe) filterSurfspotDto: GetSurfspotFilterDto,
  ): Surfspot[] {
    if (Object.keys(filterSurfspotDto).length) {
      console.log(filterSurfspotDto, 'asdhaiuhfuiaehfuidahSWJND');
      return this.surfspots.getSurfspotsByRanking(filterSurfspotDto);
    } else {
      return this.surfspots.getAllSurfspots();
    }
  }

  @Get('/:id')
  getSurfspotById(@Param('id') id: string) {
    return this.surfspots.getSurfspotById(id);
  }

  @Put('/:id')
  updateSurfspotById(
    @Body('topThreeRating', SurfspotTopThreeRankingValidationPipe)
    topThreeRating: string,
    @Param('id') id: string,
  ) {
    return this.surfspots.updateSurfspotById(topThreeRating, id);
  }

  @Delete('/delete/:id')
  deleteSurfspotById(@Param('id') id: string) {
    return this.surfspots.deleteSurfspotById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createSurfspot(@Body() createSurfspotDto: CreateSurfspotDto): Surfspot {
    console.log('body', createSurfspotDto);
    return this.surfspots.createSurfspot(createSurfspotDto);
  }
}
