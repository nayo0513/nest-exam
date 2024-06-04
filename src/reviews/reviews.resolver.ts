import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReviewsService } from './reviews.service';
import { Review } from './reviews.model';
import { CreateReviewDto } from './dto/create-review.input';
import { UserMatchGuard } from 'src/user-match-guard/user-match-guard.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Review)
export class ReviewsResolver {
  constructor(private reviewsService: ReviewsService) {}

  @Query(() => [Review])
  async findAllReviews() {
    return await this.reviewsService.findAll();
  }

  @Mutation(() => Review)
  @UseGuards(UserMatchGuard)
  createReview(@Args('create') data: CreateReviewDto) {
    return this.reviewsService.create(data);
  }
}
