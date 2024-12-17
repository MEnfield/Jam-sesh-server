import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EventsParticipants } from './EventsParticipants';
import { InstrumentTypes } from './InstrumentTypes';
import { UsersInstruments } from './UsersInstruments';

@Index('instruments_pkey', ['instrumentId'], { unique: true })
@Index('instruments_instrument_name_key', ['instrumentName'], { unique: true })
@Entity('instruments', { schema: 'public' })
export class Instruments {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'instrument_id' })
  instrumentId: number;

  @Column('character varying', {
    name: 'instrument_name',
    unique: true,
    length: 150,
  })
  instrumentName: string;

  @OneToMany(
    () => EventsParticipants,
    (eventsParticipants) => eventsParticipants.instrument,
  )
  eventsParticipants: EventsParticipants[];

  @ManyToOne(
    () => InstrumentTypes,
    (instrumentTypes) => instrumentTypes.instruments,
  )
  @JoinColumn([
    { name: 'instrument_type_id', referencedColumnName: 'instrumentTypeId' },
  ])
  instrumentType: InstrumentTypes;

  @OneToMany(
    () => UsersInstruments,
    (usersInstruments) => usersInstruments.instrument,
  )
  usersInstruments: UsersInstruments[];
}
