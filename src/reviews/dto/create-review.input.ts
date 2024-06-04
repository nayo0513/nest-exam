import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsOptional, Max, MaxLength, Min } from 'class-validator';
import { MAX_COMMENT_LENGTH, MAX_RATING, MIN_RATING } from './consts';

@InputType()
export class CreateReviewDto {
  @Field(() => Int)
  book_id: number;

  @Field(() => Int)
  user_id: number;

  @Field(() => Int)
  @IsInt()
  @Min(MIN_RATING)
  @Max(MAX_RATING)
  rating: number;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(MAX_COMMENT_LENGTH)
  comment?: string;
}
