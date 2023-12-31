import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: ['http://www.varecipes.xyz', 'localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
  });

  app.useStaticAssets(join(__dirname, '..', 'public'));
  let PORT = 4000;

  if (process.env.ENVIRONMENT === 'prod') {
    PORT = Number(process.env.PORT);
  }
  console.log(PORT);
  app.listen(PORT);
}
bootstrap();
