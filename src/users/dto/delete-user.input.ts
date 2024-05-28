import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@InputType()
export class DeleteUserDto {
  @Field(() => Int)
  @IsInt()
  id: number;
}
