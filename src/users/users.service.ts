import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.input';
import dbClient from '../dbClient';
import { UpdateUsersDto } from './dto/update-users.input';
import { DeleteUsersDto } from './dto/delete-users.input';

@Injectable()
export class UsersService {
  findAll() {
    return dbClient.users.findMany();
  }

  create(data: CreateUserDto) {
    return dbClient.users.create({
      data: data,
    });
  }

  async update(data: UpdateUsersDto) {
    const prevData = await dbClient.users.findUnique({
      where: { id: data.id },
    });
    if (!prevData) {
      throw new Error('User not found');
    }

    const newData = {
      id: data.id,
      email: data.email ?? prevData.email,
      name: data.name ?? prevData.name,
      password: data.password ?? prevData.password,
    };
    return dbClient.users.update({
      where: { id: data.id },
      data: newData,
    });
  }

  async delete(data: DeleteUsersDto) {
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
