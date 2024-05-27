import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-users.input';
import { UpdateUsersDto } from './dto/update-users.input';
import { DeleteUsersDto } from './dto/delete-users.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  users() {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  create(@Args('create') data: CreateUserDto) {
    return this.usersService.create(data);
  }

  @Mutation(() => User)
  update(@Args('update') data: UpdateUsersDto) {
    return this.usersService.update(data);
  }

  @Mutation(() => User)
  delete(@Args('delete') data: DeleteUsersDto) {
    return this.usersService.delete(data);
  }
}
