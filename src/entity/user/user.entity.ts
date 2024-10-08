import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { Roles } from './role.entity';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 36,
    name: 'id',
  })
  id!: string;
  @Column('varchar', {
    nullable: false,
    length: 255,
    name: 'name',
  })
  name!: string;
  @Column('varchar', {
    nullable: false,
    length: 255,
    name: 'password',
  })
  password!: string;
  @Column('varchar', {
    nullable: true,
    length: 255,
    name: 'email',
  })
  email!: string;
  @Column('varchar', {
    nullable: true,
    length: 10,
    name: 'phone',
  })
  phone!: number;
  @ManyToMany(() => Roles, (roles) => roles.users)
  @JoinTable({ name: 'user_roles' })
  roles!: Roles[];
}
