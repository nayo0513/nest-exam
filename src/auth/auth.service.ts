import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login.input';
import { JwtService } from '@nestjs/jwt';
import { LoginOutput } from './dto/login.output';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(data: LoginUserDto): Promise<LoginOutput> {
    const user = await this.usersService.findByEmail(data.email);
    if (!user || !(await argon2.verify(user.password, data.password))) {
      throw new UnauthorizedException();
    }
    const payload = { email: user.email, sub: user.id };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
