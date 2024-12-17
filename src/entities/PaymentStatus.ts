import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Payments } from './Payments';

@Index('payment_status_pkey', ['paymentStatusId'], { unique: true })
@Entity('payment_status', { schema: 'public' })
export class PaymentStatus {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'payment_status_id' })
  paymentStatusId: number;

  @Column('character varying', { name: 'payment_status_name', length: 25 })
  paymentStatusName: string;

  @OneToMany(() => Payments, (payments) => payments.paymentStatus)
  payments: Payments[];
}
