import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users';

@Index('roles_pkey', ['roleId'], { unique: true })
@Index('roles_role_name_key', ['roleName'], { unique: true })
@Entity('roles', { schema: 'public' })
export class Roles {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'role_id' })
  roleId: number;

  @Column('character varying', { name: 'role_name', unique: true, length: 50 })
  roleName: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @ManyToMany(() => Users, (users) => users.roles)
  @JoinTable({
    name: 'user_roles',
    joinColumns: [{ name: 'role_id', referencedColumnName: 'roleId' }],
    inverseJoinColumns: [{ name: 'user_id', referencedColumnName: 'userId' }],
    schema: 'public',
  })
  users: Users[];
}
