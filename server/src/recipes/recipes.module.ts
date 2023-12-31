import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Recipes from './recipes.entity';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Recipes])],
  controllers: [RecipesController],
  providers: [RecipesService]
})
export class RecipesModule {}
