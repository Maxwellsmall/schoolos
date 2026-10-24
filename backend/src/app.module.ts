import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { StudentsModule } from './students/students.module';
import { SchoolsModule } from './schools/schools.module';
import { UsersModule } from './users/users.module';
import { ParentsModule } from './parents/parents.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({
      throttlers: [{ ttl: 60000, limit: 120, blockDuration: 120000 }],
      errorMessage:
        'We received to many request from your device, try again later',
    }),

    PrismaModule,

    AuthModule,

    StudentsModule,

    SchoolsModule,

    UsersModule,

    ParentsModule,
  ],
})
export class AppModule {}
