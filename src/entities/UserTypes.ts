import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('user_types_pkey', ['userTypeId'], { unique: true })
@Index('user_types_user_type_name_key', ['userTypeName'], { unique: true })
@Entity('user_types', { schema: 'public' })
export class UserTypes {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'user_type_id' })
  userTypeId: number;

  @Column('character varying', {
    name: 'user_type_name',
    unique: true,
    length: 50,
  })
  userTypeName: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;
}
