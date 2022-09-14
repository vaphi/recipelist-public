import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Recipes from './recipes.entity';
import { Like } from "typeorm";

@Injectable()
export class RecipesService {
    constructor(
        @InjectRepository(Recipes)
        private recipeRepository: Repository<Recipes>,
    ) { }

    getRecipes(): Promise<Recipes[]> {
        return this.recipeRepository.find();
    }

    findLikeRecipes(search: string): Promise<Recipes[]> {
        return this.recipeRepository.findBy({
            name: Like(`%${search}%`)
        });
    }

    findRecipeById(id: number): Promise<Recipes> {
        return this.recipeRepository.findOne({
            where: {
                id: id
            }
        });
    }

    addRecipe(recipe: any): Promise<Recipes> {
        this.recipeRepository.insert(recipe);
        return recipe;
    }
}
