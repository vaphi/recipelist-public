import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Recipes from './recipes.entity';
import { Like } from "typeorm";
import { forEach, head } from 'lodash'
import Steps from 'src/steps/steps.entity';
import Ingredients from 'src/ingredients/ingredients.entity';
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

    async addRecipe(recipe: any): Promise<Recipes> {

        const newRecipe = await this.recipeRepository.createQueryBuilder()
            .insert()
            .into(Recipes)
            .values([
                {
                    name: recipe.recipeName, description: recipe.description,
                    notes: recipe.notes, origin: recipe.notes,
                    type: recipe.type, createddt: new Date(),
                    createdby: 'Va Phi'
                }
            ])
            .execute();

        const newRecipeId = newRecipe.identifiers[0].id;
        // add steps
        // add ingredients
        const steps = recipe.steps;
        const stepsToAdd = [];
        forEach(steps, step => {
            stepsToAdd.push({ description: step.stepDesc, stepsid: newRecipeId })
        })

        if (stepsToAdd.length > 0) {
            await this.recipeRepository.createQueryBuilder()
                .insert()
                .into(Steps)
                .values(stepsToAdd)
                .execute();
        }

        const ingredients = recipe.ingredients;
        const ingredientsToAdd = [];
        forEach(ingredients, ingredient => {
            ingredientsToAdd.push({
                name: ingredient.ingredientName,
                unittypeid: Number(ingredient.unitTypeId),
                recipeid: newRecipeId,
                unit: Number(ingredient.unit)
            })
        })

        if (ingredientsToAdd.length > 0) {
            await this.recipeRepository.createQueryBuilder()
                .insert()
                .into(Ingredients)
                .values(ingredientsToAdd)
                .execute();
        }

        return recipe;
    }
}
