import { IsNotEmpty } from 'class-validator';

export class CreateSurfspotDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  url: string;
}
