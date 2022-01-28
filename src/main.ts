import helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Medical service')
    .setDescription('Access the chart of patients using OAuth2')
    .setVersion('1.0')
    .addBearerAuth({type: 'oauth2'})
    .build();

  const document = SwaggerModule.createDocument(
    app,
    config
  );
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
