import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Recipes {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('varchar', { nullable: true })
  public name: string;

  @Column('varchar', { nullable: true })
  public description: string;

  @Column('text', { nullable: true })
  public notes: string;

  @Column('text', { nullable: true })
  public origin: string;

  @Column('varchar', { nullable: true })
  public type: string;

  @Column({ type: 'timestamptz', nullable: true })
  public createddt: Date;

  @Column('varchar', { nullable: true })
  public createdby: string;
}

export default Recipes;