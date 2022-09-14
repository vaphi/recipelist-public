import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class Steps {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column('text', {nullable: true})
  public description: string;
 
  @Column('int')
  public step: number;

  @Column('int')
  public stepsid: number;
}
 
export default Steps;