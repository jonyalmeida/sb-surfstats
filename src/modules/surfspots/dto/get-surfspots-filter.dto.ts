import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { SurfspotTopThree } from '../surfspots.model';

export class GetSurfspotFilterDto {
  @IsOptional()
  @IsIn([SurfspotTopThree.ONE, SurfspotTopThree.TWO, SurfspotTopThree.THREE])
  topThreeRanking: SurfspotTopThree;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
