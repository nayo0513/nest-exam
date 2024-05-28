import { Field, ID, InputType } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@InputType()
export class DeleteUserDto {
  @Field(() => ID)
  @IsInt()
  id: number;
}
