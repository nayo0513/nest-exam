import { Field, ID, InputType, Int } from '@nestjs/graphql';
import {
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { MAX_AUTHOR_LENGTH, MAX_TITLE_LENGTH } from './consts';

@InputType()
export class UpdateBookDto {
  @Field(() => ID)
  @IsInt()
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(MAX_TITLE_LENGTH)
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(MAX_AUTHOR_LENGTH)
  author?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  price?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  stock?: number;

  @Field(() => Date)
  @IsOptional()
  @IsDate()
  published_at?: Date;
}
