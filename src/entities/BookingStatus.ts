import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bookings } from './Bookings';

@Index('booking_status_pkey', ['bookingStatusId'], { unique: true })
@Entity('booking_status', { schema: 'public' })
export class BookingStatus {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'booking_status_id' })
  bookingStatusId: number;

  @Column('character varying', {
    name: 'booking_status_name',
    nullable: true,
    length: 25,
  })
  bookingStatusName: string | null;

  @OneToMany(() => Bookings, (bookings) => bookings.bookingStatus)
  bookings: Bookings[];
}
