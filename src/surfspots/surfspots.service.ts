import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';

import { Surfspot, SurfspotTopThree } from './surfspots.model';
import { CreateSurfspotDto } from './dto/create-surfspot.dto';

@Injectable()
export class SurfspotsService {
  private surfspots: Surfspot[] = [];

  getAllSurfspots(): Surfspot[] {
    return this.surfspots;
  }

  createSurfspot(createSurfspotDto: CreateSurfspotDto): Surfspot {
    const { title, description, url } = createSurfspotDto;

    const surfspot: Surfspot = {
      id: uuid.v1(),
      title,
      description,
      url,
      topThree: SurfspotTopThree.ONE,
    };

    this.surfspots.push(surfspot);
    return surfspot;
  }
}
