import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class UnitTypes {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('text', { nullable: false })
  public name: string;
}

export default UnitTypes;