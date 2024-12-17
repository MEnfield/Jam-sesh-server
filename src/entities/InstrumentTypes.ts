import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Instruments } from './Instruments';

@Index('instrument_types_pkey', ['instrumentTypeId'], { unique: true })
@Entity('instrument_types', { schema: 'public' })
export class InstrumentTypes {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'instrument_type_id' })
  instrumentTypeId: number;

  @Column('character varying', {
    name: 'instrument_type_name',
    nullable: true,
    length: 50,
  })
  instrumentTypeName: string | null;

  @OneToMany(() => Instruments, (instruments) => instruments.instrumentType)
  instruments: Instruments[];
}
