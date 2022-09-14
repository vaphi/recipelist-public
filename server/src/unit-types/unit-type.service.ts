import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UnitTypes from './unit-type.entity';

@Injectable()
export class UnitTypeService {
    constructor(
        @InjectRepository(UnitTypes)
        private recipeRepository: Repository<UnitTypes>,
    ) { }

    getAllUnitTypes(): Promise<UnitTypes[]> {
        return this.recipeRepository.find();
    }
}
