import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsController } from './ingredients.controller';
import Ingredients from './ingredients.entity';
import { IngredientsService } from './ingredients.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredients])],
  controllers: [IngredientsController],
  providers: [IngredientsService]
})
export class IngredientsModule { }
