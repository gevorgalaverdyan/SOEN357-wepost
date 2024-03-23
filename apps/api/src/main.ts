import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
  await mongoose.connect(
    'mongodb+srv://pew:marioisgay@postify.u68njdx.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp',
  );
}
bootstrap();
