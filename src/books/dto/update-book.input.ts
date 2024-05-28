import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import {
  MAX_AUTHOR_LENGTH,
  MAX_DESCRIPTION_LENGTH,
  MAX_TITLE_LENGTH,
} from './consts';

@InputType()
export class UpdateBookDto {
  @Field(() => Int)
  @IsInt()
  id: number;

  @Field()
  @IsOptional()
  @IsString()
  @MaxLength(MAX_TITLE_LENGTH)
  title?: string;

  @Field()
  @IsOptional()
  @IsString()
  @MaxLength(MAX_AUTHOR_LENGTH)
  author?: string;

  @Field()
  @IsOptional()
  @IsString()
  @MaxLength(MAX_DESCRIPTION_LENGTH)
  description?: string;

  @Field(() => Date)
  @IsOptional()
  @IsDate()
  published_at?: Date;
}
