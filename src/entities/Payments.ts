import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Events } from './Events';
import { Users } from './Users';
import { PaymentStatus } from './PaymentStatus';

@Index('payments_pkey', ['paymentId'], { unique: true })
@Entity('payments', { schema: 'public' })
export class Payments {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'payment_id' })
  paymentId: number;

  @Column('numeric', {
    name: 'amount',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  amount: string | null;

  @Column('timestamp without time zone', {
    name: 'payment_date',
    nullable: true,
  })
  paymentDate: Date | null;

  @Column('timestamp without time zone', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;

  @ManyToOne(() => Events, (events) => events.payments)
  @JoinColumn([{ name: 'event_id', referencedColumnName: 'eventId' }])
  event: Events;

  @ManyToOne(() => Users, (users) => users.payments)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'userId' }])
  user: Users;

  @ManyToOne(() => PaymentStatus, (paymentStatus) => paymentStatus.payments)
  @JoinColumn([
    { name: 'payment_status', referencedColumnName: 'paymentStatusId' },
  ])
  paymentStatus: PaymentStatus;
}
