import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => ID)
  id: number;

  @Field()
  title?: string;

  @Field()
  author: string;

  @Field()
  price: number;

  @Field()
  stock: number;

  @Field()
  published_at: Date;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field({ nullable: true })
  deleted_at: Date;
}
