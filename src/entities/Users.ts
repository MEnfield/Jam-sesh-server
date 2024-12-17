import {
  Column,
  Entity,
  Index,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bookings } from './Bookings';
import { Events } from './Events';
import { EventsParticipants } from './EventsParticipants';
import { Messages } from './Messages';
import { Payments } from './Payments';
import { Profiles } from './Profiles';
import { RatingsReviews } from './RatingsReviews';
import { Roles } from './Roles';
import { Genres } from './Genres';
import { UsersInstruments } from './UsersInstruments';
import { Audits } from './Audits';

@Index('UQ_97672ac88f789774dd47f7c8be3', ['email'], { unique: true })
@Index('users_pkey', ['userId'], { unique: true })
@Entity('users', { schema: 'public' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'user_id' })
  userId: number;

  @Column('character varying', {
    name: 'password_hash',
    nullable: true,
    length: 255,
  })
  passwordHash: string | null;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('timestamp without time zone', {
    name: 'updated_at',
    default: () => 'now()',
  })
  updatedAt: Date;

  @Column('character varying', { name: 'user_name', unique: true, length: 100 })
  username: string;

  @Column('character varying', { name: 'first_name', length: 100 })
  firstName: string;

  @Column('character varying', { name: 'last_name', length: 100 })
  lastName: string;

  @Column('boolean', { name: 'active', default: () => 'true' })
  active: boolean;

  @Column('character varying', { name: 'email', unique: true, length: 255 })
  email: string;

  @OneToMany(() => Audits, (audits) => audits.changedBy)
  audits: Audits[];

  @OneToMany(() => Bookings, (bookings) => bookings.user)
  bookings: Bookings[];

  @OneToMany(() => Events, (events) => events.organizer)
  events: Events[];

  @OneToMany(
    () => EventsParticipants,
    (eventsParticipants) => eventsParticipants.user,
  )
  eventsParticipants: EventsParticipants[];

  @OneToMany(() => Messages, (messages) => messages.recipient)
  messages: Messages[];

  @OneToMany(() => Messages, (messages) => messages.sender)
  messages2: Messages[];

  @OneToMany(() => Payments, (payments) => payments.user)
  payments: Payments[];

  @OneToOne(() => Profiles, (profiles) => profiles.profile)
  profiles: Profiles;

  @OneToMany(() => RatingsReviews, (ratingsReviews) => ratingsReviews.ratedBy)
  ratingsReviews: RatingsReviews[];

  @OneToMany(() => RatingsReviews, (ratingsReviews) => ratingsReviews.user)
  ratingsReviews2: RatingsReviews[];

  @ManyToMany(() => Roles, (roles) => roles.users)
  roles: Roles[];

  @ManyToMany(() => Genres, (genres) => genres.users)
  genres: Genres[];

  @OneToMany(
    () => UsersInstruments,
    (usersInstruments) => usersInstruments.user,
  )
  usersInstruments: UsersInstruments[];
}
