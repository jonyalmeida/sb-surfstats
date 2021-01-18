import { BadRequestException, PipeTransform } from '@nestjs/common';
import { SurfspotTopThree } from '../surfspots.model';

export class SurfspotTopThreeRankingValidationPipe implements PipeTransform {
  readonly allowedRankings = [
    SurfspotTopThree.ONE,
    SurfspotTopThree.TWO,
    SurfspotTopThree.THREE,
  ];

  transform(value: any) {
    console.log('value', value);

    value = value.toUpperCase();

    if (!this.isRankingValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid ranking.`);
    }

    return value;
  }

  private isRankingValid(ranking: any) {
    const idx = this.allowedRankings.indexOf(ranking);
    return idx !== -1;
  }
}
