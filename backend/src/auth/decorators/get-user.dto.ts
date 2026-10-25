import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Prisma, User } from '../../../generated/prisma';
import { Request } from 'express';

export const GetUser = createParamDecorator<Prisma.UserScalarFieldEnum>(
  (data: Prisma.UserScalarFieldEnum, ctx: ExecutionContext) => {
    const req: Request & { user: User } = ctx.switchToHttp().getRequest();

    if (data) return req.user[data];

    return req.user;
  },
);
