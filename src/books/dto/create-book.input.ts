import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsOptional, IsString, MaxLength } from 'class-validator';
import {
  MAX_AUTHOR_LENGTH,
  MAX_DESCRIPTION_LENGTH,
  MAX_TITLE_LENGTH,
} from './consts';

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

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(MAX_DESCRIPTION_LENGTH)
  description?: string;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  published_at?: Date;
}
