import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users') // Table name in PostgreSQL
export class User {
  @PrimaryGeneratedColumn()
  user_id: number; // Auto-incrementing primary key

  @Column({ type: 'varchar', length: 100 })
  first_name: string; // User's first name

  @Column({ type: 'varchar', length: 100 })
  last_name: string; // User's last name

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string; // User's email address, must be unique

  @Column({ type: 'varchar', length: 255, nullable: true })
  password_hash?: string; // Encrypted password (nullable for OAuth scenarios)

  @Column({ type: 'boolean', default: true })
  active: boolean; // Indicates whether the account is active

  @CreateDateColumn()
  created_at: Date; // Timestamp when the user was created

  @UpdateDateColumn()
  updated_at: Date; // Timestamp when the user was last updated
}
