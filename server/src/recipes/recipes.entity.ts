import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Recipes {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('varchar', { nullable: true })
  public name: string;

  @Column('varchar', { nullable: true })
  public description: string;

  @Column()
  public ingredientsid: number;

  @Column('text', { nullable: true })
  public notes: string;

  @Column('text', { nullable: true })
  public origin: string;

  @Column()
  public stepsid: number;

  @Column('varchar', { nullable: true })
  public type: string;

  @Column()
  public createddt: Date;

  @Column('varchar', { nullable: true })
  public createdby: string;
}

export default Recipes;