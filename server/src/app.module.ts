import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecipesModule } from './recipes/recipes.module';
import { StepsModule } from './steps/steps.module';
import { UnitTypeModule } from './unit-types/unit-type.module';

@Module({
  imports: [
    RecipesModule,
    StepsModule,
    UnitTypeModule,
    IngredientsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:process.env.POSTGRES_HOST,
      port:Number(process.env.POSTGRES_PORT),
      username:process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD,
      database:process.env.POSTGRES_DB,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // This for development
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
