import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserMatchGuard implements CanActivate {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

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
    const id1 = (await this.jwtService.decode(token1))?.id;
    const id2 = (await this.usersService.findById(id))?.id;

    if (!id1 || !id2) {
      return false;
    }
    return id1 == id2;
  }
}
