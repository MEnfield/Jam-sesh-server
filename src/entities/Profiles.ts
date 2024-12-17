import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { Users } from './Users';

@Index('profiles_pkey', ['profileId'], { unique: true })
@Entity('profiles', { schema: 'public' })
export class Profiles {
  @Column('integer', { primary: true, name: 'profile_id' })
  profileId: number;

  @Column('character varying', {
    name: 'first_name',
    nullable: true,
    length: 100,
  })
  firstName: string | null;

  @Column('character varying', {
    name: 'last_name',
    nullable: true,
    length: 100,
  })
  lastName: string | null;

  @Column('text', { name: 'bio', nullable: true })
  bio: string | null;

  @Column('geometry', { name: 'location', nullable: true })
  location: string | null;

  @Column('character varying', {
    name: 'profile_picture_url',
    nullable: true,
    length: 255,
  })
  profilePictureUrl: string | null;

  @Column('jsonb', { name: 'social_links', nullable: true })
  socialLinks: object | null;

  @OneToOne(() => Users, (users) => users.profiles, { onDelete: 'CASCADE' })
  @JoinColumn([{ name: 'profile_id', referencedColumnName: 'userId' }])
  profile: Users;
}
