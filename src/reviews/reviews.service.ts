import { Injectable } from '@nestjs/common';
import dbClient from 'src/dbClient';
import { CreateReviewDto } from './dto/create-review.input';

@Injectable()
export class ReviewsService {
  async findAll() {
    return await dbClient.reviews.findMany();
  }

  create(data: CreateReviewDto) {
    return dbClient.reviews.create({
      data: data,
    });
  }
}
