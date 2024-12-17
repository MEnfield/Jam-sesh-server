import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Instruments } from './Instruments';
import { Users } from './Users';

@Index('users_instruments_pkey', ['instrumentId', 'userId'], { unique: true })
@Entity('users_instruments', { schema: 'public' })
export class UsersInstruments {
  @Column('integer', { primary: true, name: 'user_id' })
  userId: number;

  @Column('integer', { primary: true, name: 'instrument_id' })
  instrumentId: number;

  @Column('integer', { name: 'skill_rating' })
  skillRating: number;

  @Column('boolean', { name: 'owns_instrument' })
  ownsInstrument: boolean;

  @ManyToOne(() => Instruments, (instruments) => instruments.usersInstruments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'instrument_id', referencedColumnName: 'instrumentId' }])
  instrument: Instruments;

  @ManyToOne(() => Users, (users) => users.usersInstruments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'userId' }])
  user: Users;
}
