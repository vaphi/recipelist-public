import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StepsController } from './steps.controller';
import Steps from './steps.entity';
import { StepsService } from './steps.service';

@Module({
  imports: [TypeOrmModule.forFeature([Steps])],
  controllers: [StepsController],
  providers: [StepsService]
})
export class StepsModule {}
