import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.input';
import dbClient from '../dbClient';
import { UpdateUserDto } from './dto/update-user.input';
import { DeleteUserDto } from './dto/delete-user.input';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  findAll() {
    return dbClient.users.findMany();
  }

  async create(data: CreateUserDto) {
    const newData = {
      email: data.email,
      name: data.name,
      password: await argon2.hash(data.password),
    };
    return dbClient.users.create({
      data: newData,
    });
  }

  async update(data: UpdateUserDto) {
    const prevData = await dbClient.users.findUnique({
      where: { id: data.id },
    });
    if (!prevData) {
      throw new Error('User not found');
    }

    const encryptPassword = data.password
      ? await argon2.hash(data.password)
      : null;

    const newData = {
      id: data.id,
      email: data.email ?? prevData.email,
      name: data.name ?? prevData.name,
      password: encryptPassword ?? prevData.password,
    };
    return dbClient.users.update({
      where: { id: data.id },
      data: newData,
    });
  }

  async delete(data: DeleteUserDto) {
    const prevData = await dbClient.users.findUnique({
      where: { id: data.id },
    });
    if (!prevData) {
      throw new Error('User not found');
    }

    const newData = {
      id: data.id,
      email: prevData.email,
      name: prevData.name,
      password: prevData.password,
      deleted_at: new Date(),
    };
    return dbClient.users.update({
      where: { id: data.id },
      data: newData,
    });
  }
}
