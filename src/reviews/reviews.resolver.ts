import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReviewsService } from './reviews.service';
import { Review } from './reviews.model';
import { CreateReviewDto } from './dto/create-review.input';

@Resolver(() => Review)
export class ReviewsResolver {
  constructor(private reviewsService: ReviewsService) {}

  @Query(() => [Review])
  async findAllReviews() {
    return await this.reviewsService.findAll();
  }

  @Mutation(() => Review)
  createReview(@Args('create') data: CreateReviewDto) {
    return this.reviewsService.create(data);
  }
}
