import { Field, InputType } from '@nestjs/graphql';
import { MAX_EMAIL_LENGTH, MAX_PASSWORD_LENGTH } from '../../users/dto/consts';
import { IsEmail, IsString, MaxLength } from 'class-validator';

@InputType()
export class LoginUserDto {
  @Field()
  @IsEmail()
  @MaxLength(MAX_EMAIL_LENGTH)
  email: string;

  @Field()
  @IsString()
  @MaxLength(MAX_PASSWORD_LENGTH)
  password: string;
}
