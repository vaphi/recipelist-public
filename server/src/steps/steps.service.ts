import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Steps from './steps.entity';

@Injectable()
export class StepsService {
    constructor(
        @InjectRepository(Steps)
        private recipeRepository: Repository<Steps>,
    ) { }

    findStepsById(id: number): Promise<Steps[]> {
        return this.recipeRepository.findBy({
            id: id
        });
    }

    findStepsByRecipeId(id: number): Promise<Steps[]> {
        return this.recipeRepository.findBy({
            stepsid: id
        });
    }
}
