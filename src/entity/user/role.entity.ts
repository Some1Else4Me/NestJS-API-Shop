import { BaseEntity, Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('roles')
export class Roles extends BaseEntity {
  @PrimaryColumn({
    type: 'int',
    name: 'id',
  })
  id!: number;
  @Column()
  name!: string;
  @ManyToMany(() => User, (user) => user.roles)
  users!: User[];
}
