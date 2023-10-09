import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ExpressAdapter } from '@nestjs/platform-express';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter());

  // Configuración de CORS
  app.enableCors({
    origin: 'https://www.colegioandeschile.cl',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    //credentials: true, // Si necesitas permitir credenciales (cookies, autenticación HTTP, etc.)
  });

  await app.listen(4002);
}
bootstrap();
