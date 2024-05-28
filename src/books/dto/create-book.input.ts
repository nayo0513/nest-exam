import { Field, InputType, Int } from '@nestjs/graphql';
import { IsDate, IsInt, IsString, MaxLength } from 'class-validator';
import { MAX_AUTHOR_LENGTH, MAX_TITLE_LENGTH } from './consts';

@InputType()
export class CreateBookDto {
  @Field()
  @IsString()
  @MaxLength(MAX_TITLE_LENGTH)
  title: string;

  @Field()
  @IsString()
  @MaxLength(MAX_AUTHOR_LENGTH)
  author: string;

  @Field(() => Int)
  @IsInt()
  price: number;

  @Field(() => Int)
  @IsInt()
  stock: number;

  @Field(() => Date)
  @IsDate()
  published_at: Date;
}
