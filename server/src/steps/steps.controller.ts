import { Body, Controller, Get, Post } from '@nestjs/common';
import { StepsService } from './steps.service';

@Controller('steps')
export class StepsController {
  constructor(private readonly steps: StepsService) { }

  @Post('/findStepsById')
  async findStepsById(@Body() request: any) {

    return await this.steps.findStepsById(request.variables.id);
  }

  @Post('/findStepsByRecipeId')
  async findStepsByRecipeId(@Body() request: any) {

    return await this.steps.findStepsByRecipeId(request.variables.id);
  }
}
