import { Body, Controller, Get, Post } from '@nestjs/common';
import { UnitTypeService } from './unit-type.service';

@Controller('unittypes')
export class UnitTypeController {
  constructor(private readonly unitType: UnitTypeService) { }

  @Post('/getAllUnitTypes')
  async getAllUnitTypes() {

    return await this.unitType.getAllUnitTypes();
  }
}
