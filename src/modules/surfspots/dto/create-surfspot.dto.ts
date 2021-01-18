import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSurfspotDto {
  @ApiProperty({
    description: 'The title of a surf spot.',
    format: 'utf-8',
    type: String,
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'The description of a surf spot.',
    format: 'utf-8',
    type: String,
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: `The url with surf spot's surf report.`,
    type: String,
    default: 'https://wwww.magiseaweed.com/',
  })
  @IsNotEmpty()
  url: string;
}
