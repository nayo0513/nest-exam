import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsResolver } from './reviews.resolver';
import { UserMatchGuard } from 'src/user-match-guard/user-match-guard.guard';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [JwtModule.register({ secret: 'secretKey' }), UsersModule],
  providers: [ReviewsService, ReviewsResolver, UserMatchGuard],
})
export class ReviewsModule {}
