import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';

import { Surfspot, SurfspotTopThree } from './surfspots.model';

@Injectable()
export class SurfspotsService {
  private surfspots: Surfspot[] = [];

  getAllSurfspots(): Surfspot[] {
    return this.surfspots;
  }

  createSurfspot(title: string, description: string, url: string): Surfspot {
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
