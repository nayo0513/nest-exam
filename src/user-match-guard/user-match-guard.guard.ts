import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class UserMatchGuard implements CanActivate {
  constructor(private readonly usersService: UsersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext()?.req;

    if (!request) {
      throw new Error('Request object is undefined');
    }
    const id = ctx.getArgs().create.user_id;
    if (!id) {
      return false;
    }
    const token1 = request.headers['token'];
    const token2 = (await this.usersService.findById(1))?.password;
    if (!token1 || !token2) {
      return false;
    }
    return token1 === token2;
  }
}
