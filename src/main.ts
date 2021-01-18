import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //swagger integration
  const config = new DocumentBuilder()
    .setTitle('Surfspot Somewhere')
    .setDescription('The SB-Surfstats API description.')
    .setVersion('beta')
    .addTag('I rather be surfing.')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //global prefix
  app.setGlobalPrefix('api/v1');

  await app.listen(4200);
}
bootstrap();
