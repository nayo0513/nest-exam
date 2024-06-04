import { Field, InputType } from '@nestjs/graphql';
import { IsString, MaxLength } from 'class-validator';
import { MAX_TITLE_LENGTH } from './consts';

@InputType()
export class SearchBookDto {
  @Field()
  @IsString()
  @MaxLength(MAX_TITLE_LENGTH)
  word: string;
}
