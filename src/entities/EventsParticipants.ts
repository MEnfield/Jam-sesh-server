import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Events } from './Events';
import { Instruments } from './Instruments';
import { Users } from './Users';

@Entity('events_participants', { schema: 'public' })
export class EventsParticipants {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'event_participant_id' })
  eventParticipantId: number;

  @Column('integer', { name: 'skill_rating_floor' })
  skillRatingFloor: number;

  @Column('boolean', { name: 'is_organizer', default: () => 'false' })
  isOrganizer: boolean;

  @ManyToOne(() => Events, (events) => events.eventsParticipants, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'event_id', referencedColumnName: 'eventId' }])
  event: Events;

  @ManyToOne(
    () => Instruments,
    (instruments) => instruments.eventsParticipants,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'instrument_id', referencedColumnName: 'instrumentId' }])
  instrument: Instruments;

  @ManyToOne(() => Users, (users) => users.eventsParticipants)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'userId' }])
  user: Users;
}
