import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IsOptional, Length, MaxLength } from 'class-validator';
import {
  MAX_EMAIL_LENGTH,
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
} from './consts';

@InputType()
export class UpdateUserDto {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  @MaxLength(MAX_EMAIL_LENGTH)
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(MIN_NAME_LENGTH, MAX_NAME_LENGTH)
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH)
  password?: string;
}
