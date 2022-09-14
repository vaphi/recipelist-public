import { Body, Controller, Get, Post } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredient: IngredientsService) { }

  @Post('/findIngredientsById')
  async findIngredientsById(@Body() request : any) {

    return await this.ingredient.findIngredientsById(request.variables.id);
  }

  @Post('/findIngredientsByRecipeId')
  async findIngredientsByRecipeId(@Body() request : any) {

    const test = await this.ingredient.findIngredientsByRecipeId(request.variables.id);
    return test;
  }
}
