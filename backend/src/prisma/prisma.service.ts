import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private readonly config: ConfigService) {
    super({
      adapter: new PrismaPg({ connectionString: config.get('DATABASE_URL') }),
    });
  }
}
