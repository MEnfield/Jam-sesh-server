import { Column, Entity, Index, Point, PrimaryGeneratedColumn } from 'typeorm';

@Index('locations_pkey', ['locationId'], { unique: true })
@Entity('locations', { schema: 'public' })
export class Locations {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'location_id' })
  locationId: number;

  @Column('character varying', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('character varying', { name: 'address', nullable: true, length: 255 })
  address: string | null;

  @Column('geometry', {
    name: 'coordinates',
    nullable: true,
    spatialFeatureType: 'Point',
    srid: 4326,
  })
  coordinates: Point | null;

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
}
