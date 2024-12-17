import { Users } from './Users';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index('audits_pkey', ['auditId'], { unique: true })
@Entity('audits', { schema: 'public' })
export class Audits {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'audit_id' })
  auditId: number;

  @Column('character varying', { name: 'action', nullable: true, length: 255 })
  action: string | null;

  @Column('character varying', {
    name: 'table_name',
    nullable: true,
    length: 255,
  })
  tableName: string | null;

  @Column('integer', { name: 'record_id', nullable: true })
  recordId: number | null;

  @Column('jsonb', { name: 'old_data', nullable: true })
  oldData: object | null;

  @Column('jsonb', { name: 'new_data', nullable: true })
  newData: object | null;

  @Column('timestamp without time zone', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;

  @ManyToOne(() => Users, (users) => users.audits)
  @JoinColumn([{ name: 'changed_by', referencedColumnName: 'userId' }])
  changedBy: Users;
}
