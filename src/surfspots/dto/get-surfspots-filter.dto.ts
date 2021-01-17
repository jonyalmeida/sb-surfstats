import { SurfspotTopThree } from '../surfspots.model';

export class GetSurfspotFilterDto {
  topThreeRanking: SurfspotTopThree;
  search: string;
}
