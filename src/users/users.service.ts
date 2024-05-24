import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClient) {}

  create(data: CreateUserDto) {
    return this.prisma.users.create({
      data: data,
    });
  }

  update(id: number, data: CreateUserDto) {
    return this.prisma.users.update({
      where: { id: id },
      data: data,
    });
  }
}
