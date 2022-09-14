import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Ingredients from './ingredients.entity';

@Injectable()
export class IngredientsService {
    constructor(
        @InjectRepository(Ingredients)
        private recipeRepository: Repository<Ingredients>,
    ) { }

    findIngredientsById(id: number): Promise<Ingredients[]> {
        return this.recipeRepository.findBy({
            id: id
        });
    }

    findIngredientsByRecipeId(id: number): Promise<Ingredients[]> {
        const res = this.recipeRepository.findBy({
            recipeid: id
        });

        return res;
    }
}
