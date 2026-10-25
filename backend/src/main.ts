import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ErrorResponseDto } from './common/dto';

declare const module: any;

async function bootstrap() {
  if (module.hot?.data?.closePromise) {
    await module.hot.data.closePromise;
  }

  const app = await NestFactory.create(AppModule, {
    forceCloseConnections: !!module.hot,
  });

  app.use(helmet());

  app.enableCors({});

  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const config = new DocumentBuilder()
    .setTitle('SchoolOS API Documentation')
    .setDescription('SchoolOS API documentation')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addGlobalResponse({ status: '4XX', type: ErrorResponseDto })
    .addGlobalResponse({ status: '5XX', type: ErrorResponseDto })
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose = (data: any) => {
      data.closePromise = app.close();
    };
  }
}

void bootstrap();
