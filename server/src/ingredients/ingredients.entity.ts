import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class Ingredients {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column('text', {nullable: true})
  public name: string;

  @Column()
  public unittypeid: number;

  @Column()
  public recipeid: number;

  @Column()
  public unit: number;
}
 
export default Ingredients;