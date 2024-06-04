import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login.input';
import { LoginOutput } from './dto/login.output';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  //login
  @Query(() => LoginOutput)
  async login(@Args('login') data: LoginUserDto) {
    return await this.authService.login(data);
  }
}
