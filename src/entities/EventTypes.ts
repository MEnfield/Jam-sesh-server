import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Events } from './Events';

@Index('event_types_pkey', ['eventTypeId'], { unique: true })
@Entity('event_types', { schema: 'public' })
export class EventTypes {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'event_type_id' })
  eventTypeId: number;

  @Column('character varying', {
    name: 'event_type_name',
    nullable: true,
    length: 25,
  })
  eventTypeName: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @OneToMany(() => Events, (events) => events.eventType)
  events: Events[];
}
