import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users';

@Index('genres_pkey', ['genreId'], { unique: true })
@Index('genres_genre_name_key', ['genreName'], { unique: true })
@Entity('genres', { schema: 'public' })
export class Genres {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'genre_id' })
  genreId: number;

  @Column('character varying', {
    name: 'genre_name',
    unique: true,
    length: 100,
  })
  genreName: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @ManyToMany(() => Users, (users) => users.genres)
  @JoinTable({
    name: 'users_genres',
    joinColumns: [{ name: 'genre_id', referencedColumnName: 'genreId' }],
    inverseJoinColumns: [{ name: 'user_id', referencedColumnName: 'userId' }],
    schema: 'public',
  })
  users: Users[];
}
