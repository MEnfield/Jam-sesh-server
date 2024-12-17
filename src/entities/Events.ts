import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bookings } from './Bookings';
import { EventTypes } from './EventTypes';
import { Users } from './Users';
import { EventsParticipants } from './EventsParticipants';
import { Payments } from './Payments';
import { RatingsReviews } from './RatingsReviews';

@Index('events_pkey', ['eventId'], { unique: true })
@Entity('events', { schema: 'public' })
export class Events {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'event_id' })
  eventId: number;

  @Column('character varying', { name: 'title', length: 255 })
  title: string;

  @Column('text', { name: 'description' })
  description: string;

  @Column('geometry', { name: 'location', nullable: true })
  location: string | null;

  @Column('timestamp without time zone', { name: 'start_time' })
  startTime: Date;

  @Column('timestamp without time zone', { name: 'end_time', nullable: true })
  endTime: Date | null;

  @Column('integer', { name: 'max_participants', nullable: true })
  maxParticipants: number | null;

  @Column('integer', { name: 'skill_rating_floor', nullable: true })
  skillRatingFloor: number | null;

  @Column('numeric', {
    name: 'compensation',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  compensation: string | null;

  @Column('boolean', {
    name: 'is_private',
    nullable: true,
    default: () => 'true',
  })
  isPrivate: boolean | null;

  @Column('timestamp without time zone', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;

  @Column('timestamp without time zone', {
    name: 'updated_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date | null;

  @OneToMany(() => Bookings, (bookings) => bookings.event)
  bookings: Bookings[];

  @ManyToOne(() => EventTypes, (eventTypes) => eventTypes.events, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'event_type_id', referencedColumnName: 'eventTypeId' }])
  eventType: EventTypes;

  @ManyToOne(() => Users, (users) => users.events, { onDelete: 'CASCADE' })
  @JoinColumn([{ name: 'organizer_id', referencedColumnName: 'userId' }])
  organizer: Users;

  @OneToMany(
    () => EventsParticipants,
    (eventsParticipants) => eventsParticipants.event,
  )
  eventsParticipants: EventsParticipants[];

  @OneToMany(() => Payments, (payments) => payments.event)
  payments: Payments[];

  @OneToMany(() => RatingsReviews, (ratingsReviews) => ratingsReviews.event)
  ratingsReviews: RatingsReviews[];
}
