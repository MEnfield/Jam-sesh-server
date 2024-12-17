import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Events } from './Events';
import { Users } from './Users';

@Index('ratings_reviews_pkey', ['id'], { unique: true })
@Entity('ratings_reviews', { schema: 'public' })
export class RatingsReviews {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'rating', nullable: true })
  rating: number | null;

  @Column('text', { name: 'review', nullable: true })
  review: string | null;

  @Column('timestamp without time zone', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;

  @ManyToOne(() => Events, (events) => events.ratingsReviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'event_id', referencedColumnName: 'eventId' }])
  event: Events;

  @ManyToOne(() => Users, (users) => users.ratingsReviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'rated_by', referencedColumnName: 'userId' }])
  ratedBy: Users;

  @ManyToOne(() => Users, (users) => users.ratingsReviews2, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'userId' }])
  user: Users;
}
