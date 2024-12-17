import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BookingStatus } from './BookingStatus';
import { Events } from './Events';
import { Users } from './Users';

@Index('bookings_pkey', ['bookingId'], { unique: true })
@Entity('bookings', { schema: 'public' })
export class Bookings {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'booking_id' })
  bookingId: number;

  @Column('timestamp without time zone', {
    name: 'booking_time',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  bookingTime: Date | null;

  @ManyToOne(() => BookingStatus, (bookingStatus) => bookingStatus.bookings)
  @JoinColumn([
    { name: 'booking_status_id', referencedColumnName: 'bookingStatusId' },
  ])
  bookingStatus: BookingStatus;

  @ManyToOne(() => Events, (events) => events.bookings, { onDelete: 'CASCADE' })
  @JoinColumn([{ name: 'event_id', referencedColumnName: 'eventId' }])
  event: Events;

  @ManyToOne(() => Users, (users) => users.bookings, { onDelete: 'CASCADE' })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'userId' }])
  user: Users;
}
