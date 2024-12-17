import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users';

@Index('messages_pkey', ['messageId'], { unique: true })
@Entity('messages', { schema: 'public' })
export class Messages {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'message_id' })
  messageId: number;

  @Column('text', { name: 'message_body' })
  messageBody: string;

  @Column('timestamp without time zone', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;

  @ManyToOne(() => Users, (users) => users.messages)
  @JoinColumn([{ name: 'recipient_id', referencedColumnName: 'userId' }])
  recipient: Users;

  @ManyToOne(() => Users, (users) => users.messages2)
  @JoinColumn([{ name: 'sender_id', referencedColumnName: 'userId' }])
  sender: Users;
}
