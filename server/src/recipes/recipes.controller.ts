import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipeService: RecipesService) { }

  @Get('/getRecipes')
  getRecipes() {
    return this.recipeService.getRecipes();
  }

  @Post('/findRecipeById')
  async findRecipeById(@Body() request : any) {

    return await this.recipeService.findRecipeById(request.variables.id);
  }

  @Post('/findRecipes')
  async findRecipes(@Body() request : any) {

    return await this.recipeService.findLikeRecipes(request.variables.search);
  }

  @Post('/addRecipe')
  addRecipe(@Body() recipe: any) {
    return this.recipeService.addRecipe(recipe);
  }
}
