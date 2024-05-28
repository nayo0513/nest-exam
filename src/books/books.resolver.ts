import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './books.model';
import { CreateBookDto } from './dto/create-book.input';
import { UpdateBookDto } from './dto/update-book.input';
import { DeleteBookDto } from './dto/delete-book.input';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query(() => [Book])
  async findAllBooks() {
    return await this.booksService.findAll();
  }

  @Mutation(() => Book)
  createBook(@Args('create') data: CreateBookDto) {
    return this.booksService.create(data);
  }

  @Mutation(() => Book)
  updateBook(@Args('update') data: UpdateBookDto) {
    return this.booksService.update(data);
  }

  @Mutation(() => Book)
  deleteBook(@Args('delete') data: DeleteBookDto) {
    return this.booksService.delete(data);
  }
}
