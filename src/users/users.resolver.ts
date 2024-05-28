import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.input';
import { UpdateUserDto } from './dto/update-user.input';
import { DeleteUserDto } from './dto/delete-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  findAllUsers() {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  createUser(@Args('create') data: CreateUserDto) {
    return this.usersService.create(data);
  }

  @Mutation(() => User)
  updateUser(@Args('update') data: UpdateUserDto) {
    return this.usersService.update(data);
  }

  @Mutation(() => User)
  deleteUser(@Args('delete') data: DeleteUserDto) {
    return this.usersService.delete(data);
  }
}
