import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { catchError } from 'rxjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('App Running on port:3000')
}
bootstrap();
