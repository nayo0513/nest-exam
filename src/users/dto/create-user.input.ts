import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, Length, MaxLength } from 'class-validator';
import {
  MAX_EMAIL_LENGTH,
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
} from './consts';

@InputType()
export class CreateUserDto {
  @Field()
  @IsEmail()
  @MaxLength(MAX_EMAIL_LENGTH)
  email: string;

  @Field()
  @IsString()
  @Length(MIN_NAME_LENGTH, MAX_NAME_LENGTH)
  name: string;

  @Field()
  @IsString()
  @Length(MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH)
  password: string;
}
