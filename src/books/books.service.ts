import { Injectable } from '@nestjs/common';
import dbClient from 'src/dbClient';
import { CreateBookDto } from './dto/create-book.input';
import { UpdateBookDto } from './dto/update-book.input';
import { DeleteBookDto } from './dto/delete-book.input';

@Injectable()
export class BooksService {
  findAll() {
    return dbClient.books.findMany();
  }

  create(data: CreateBookDto) {
    return dbClient.books.create({
      data,
    });
  }

  async update(data: UpdateBookDto) {
    const prevData = await dbClient.books.findUnique({
      where: { id: data.id },
    });
    if (!prevData) {
      throw new Error('Book not found');
    }

    const newData = {
      id: data.id,
      title: data.title ?? prevData.title,
      author: data.author ?? prevData.author,
      description: data.description ?? prevData.description,
      published_at: data.published_at ?? prevData.published_at,
    };

    return dbClient.books.update({
      where: { id: data.id },
      data: newData,
    });
  }

  delete(data: DeleteBookDto) {
    return dbClient.books.delete({
      where: { id: data.id },
    });
  }
}
