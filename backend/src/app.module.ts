import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({
      throttlers: [{ ttl: 60000, limit: 120, blockDuration: 120000 }],
      errorMessage:
        'We received to many request from your device, try again later',
    }),
  ],
})
export class AppModule {}
