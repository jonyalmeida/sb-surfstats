import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';

import { Surfspot, SurfspotTopThree } from './surfspots.model';
import { CreateSurfspotDto } from './dto/create-surfspot.dto';

@Injectable()
export class SurfspotsService {
  private surfspots: Surfspot[] = [];

  getAllSurfspots(): Surfspot[] {
    console.log('asdiowufnewo');
    return this.surfspots;
  }

  getSurfspotById(id: string): Surfspot {
    return this.surfspots.find((surfspot) => surfspot.id === id);
  }

  updateSurfspotById(topThreeRating: string, id: string): Surfspot {
    let i: number;
    this.surfspots.filter((surfspot, idx) => {
      if (surfspot.id === id) {
        i = idx;
      }
    });

    switch (topThreeRating) {
      case 'ONE':
        this.surfspots[i].topThree = SurfspotTopThree.ONE;
        break;
      case 'TWO':
        this.surfspots[i].topThree = SurfspotTopThree.TWO;
        break;
      case 'THREE':
        this.surfspots[i].topThree = SurfspotTopThree.THREE;
        break;
    }

    return this.surfspots[i];
  }

  deleteSurfspotById(id: string): Surfspot {
    let i: number;
    this.surfspots.filter((surfspot, idx) => {
      if (surfspot.id === id) {
        i = idx;
      }
    });
    console.log(this.surfspots);
    return this.surfspots.splice(i, 1)[0];
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
