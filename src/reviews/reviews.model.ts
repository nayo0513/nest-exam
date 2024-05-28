import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Review {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  book_id: number;

  @Field(() => ID)
  user_id: number;

  @Field()
  rating: number;

  @Field()
  comment: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field({ nullable: true })
  deleted_at: Date;
}
