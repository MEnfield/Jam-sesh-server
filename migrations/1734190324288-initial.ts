import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1734190324288 implements MigrationInterface {
  name = 'Initial1734190324288';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users_instruments" DROP CONSTRAINT "users_instruments_instrument_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_instruments" DROP CONSTRAINT "users_instruments_user_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "instruments" DROP CONSTRAINT "instruments_instrument_type_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" DROP CONSTRAINT "events_positions_user_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" DROP CONSTRAINT "events_positions_instrument_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" DROP CONSTRAINT "events_positions_event_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" DROP CONSTRAINT "payments_payment_status_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" DROP CONSTRAINT "payments_musician_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" DROP CONSTRAINT "payments_event_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" DROP CONSTRAINT "ratings_reviews_event_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" DROP CONSTRAINT "ratings_reviews_rated_by_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" DROP CONSTRAINT "ratings_reviews_user_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" DROP CONSTRAINT "events_event_type_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" DROP CONSTRAINT "events_organizer_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" DROP CONSTRAINT "bookings_booking_status_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" DROP CONSTRAINT "bookings_event_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" DROP CONSTRAINT "bookings_user_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "messages" DROP CONSTRAINT "messages_recipient_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "messages" DROP CONSTRAINT "messages_sender_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "profiles" DROP CONSTRAINT "profiles_profile_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "audits" DROP CONSTRAINT "audits_changed_by_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_role_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_user_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_genres" DROP CONSTRAINT "users_genres_genre_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_genres" DROP CONSTRAINT "users_genres_user_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_instruments" DROP CONSTRAINT "users_instruments_skill_rating_check"`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" DROP CONSTRAINT "events_positions_skill_rating_floor_check"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" DROP CONSTRAINT "ratings_reviews_rating_check"`,
    );
    await queryRunner.query(
      `ALTER TABLE "spatial_ref_sys" DROP CONSTRAINT "spatial_ref_sys_srid_check"`,
    );
    await queryRunner.query(`ALTER TABLE "payments" DROP COLUMN "musician_id"`);
    await queryRunner.query(
      `ALTER TABLE "events_participants" ADD "event_participant_id" SERIAL NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" ADD CONSTRAINT "PK_8680581a87b8ae43f6402a67b5c" PRIMARY KEY ("event_participant_id")`,
    );
    await queryRunner.query(`ALTER TABLE "payments" ADD "user_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "user_name" character varying(100) NOT NULL`,
    );
    await queryRunner.query(
      `CREATE SEQUENCE IF NOT EXISTS "booking_status_booking_status_id_seq" OWNED BY "booking_status"."booking_status_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking_status" ALTER COLUMN "booking_status_id" SET DEFAULT nextval('"booking_status_booking_status_id_seq"')`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking_status" ALTER COLUMN "booking_status_id" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "instruments" ALTER COLUMN "instrument_type_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" ALTER COLUMN "event_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" ALTER COLUMN "instrument_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" ALTER COLUMN "created_at" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" ALTER COLUMN "payment_status" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" ALTER COLUMN "created_at" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "location" TYPE geometry`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "updated_at" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "event_type_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "organizer_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ALTER COLUMN "booking_time" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ALTER COLUMN "booking_status_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ALTER COLUMN "event_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ALTER COLUMN "user_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "messages" ALTER COLUMN "created_at" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "profiles" ALTER COLUMN "location" TYPE geometry`,
    );
    await queryRunner.query(
      `ALTER TABLE "audits" ALTER COLUMN "created_at" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "locations" ALTER COLUMN "coordinates" TYPE geography`,
    );
    await queryRunner.query(
      `ALTER TABLE "locations" ALTER COLUMN "created_at" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "locations" ALTER COLUMN "updated_at" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_instruments" ADD CONSTRAINT "FK_d83bb92e5fe6d1305cd7fd6e183" FOREIGN KEY ("instrument_id") REFERENCES "instruments"("instrument_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_instruments" ADD CONSTRAINT "FK_87e16ed243a14b56b1b03f7b69e" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "instruments" ADD CONSTRAINT "FK_4e1ba90e8b66cb83cae2a157081" FOREIGN KEY ("instrument_type_id") REFERENCES "instrument_types"("instrument_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" ADD CONSTRAINT "FK_829db3436991bb6fbb52f71fea0" FOREIGN KEY ("event_id") REFERENCES "events"("event_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" ADD CONSTRAINT "FK_3743cdeb85e3b6a5c636d6ded16" FOREIGN KEY ("instrument_id") REFERENCES "instruments"("instrument_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" ADD CONSTRAINT "FK_91d10b59b894d31640fe70cee14" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" ADD CONSTRAINT "FK_f08b71380816f776522a404335e" FOREIGN KEY ("event_id") REFERENCES "events"("event_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" ADD CONSTRAINT "FK_427785468fb7d2733f59e7d7d39" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" ADD CONSTRAINT "FK_4e138ff5e470441d31f649f8d9a" FOREIGN KEY ("payment_status") REFERENCES "payment_status"("payment_status_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" ADD CONSTRAINT "FK_0121ad6b9ee630fb4753ede2bc2" FOREIGN KEY ("event_id") REFERENCES "events"("event_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" ADD CONSTRAINT "FK_c07ed12c532e08293fde57360a2" FOREIGN KEY ("rated_by") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" ADD CONSTRAINT "FK_423b57edd033536a835c6967195" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ADD CONSTRAINT "FK_cca2d7a421ac4b1b24b9996d101" FOREIGN KEY ("event_type_id") REFERENCES "event_types"("event_type_id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ADD CONSTRAINT "FK_14c9ce53a2c2a1c781b8390123e" FOREIGN KEY ("organizer_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ADD CONSTRAINT "FK_41aac9c49f2f9ea9896a2660b87" FOREIGN KEY ("booking_status_id") REFERENCES "booking_status"("booking_status_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ADD CONSTRAINT "FK_976c0fe23c870f914acd2378e4e" FOREIGN KEY ("event_id") REFERENCES "events"("event_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ADD CONSTRAINT "FK_64cd97487c5c42806458ab5520c" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "messages" ADD CONSTRAINT "FK_566c3d68184e83d4307b86f85ab" FOREIGN KEY ("recipient_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "messages" ADD CONSTRAINT "FK_22133395bd13b970ccd0c34ab22" FOREIGN KEY ("sender_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "profiles" ADD CONSTRAINT "FK_6a23df60690da92fd263eca2e93" FOREIGN KEY ("profile_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "audits" ADD CONSTRAINT "FK_dc00196b008faa870e8208d5abf" FOREIGN KEY ("changed_by") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_roles" ADD CONSTRAINT "FK_b23c65e50a758245a33ee35fda1" FOREIGN KEY ("role_id") REFERENCES "roles"("role_id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_roles" ADD CONSTRAINT "FK_87b8888186ca9769c960e926870" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_genres" ADD CONSTRAINT "FK_4f7ec573c98496db516a703fdbd" FOREIGN KEY ("genre_id") REFERENCES "genres"("genre_id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_genres" ADD CONSTRAINT "FK_55e0805fdaf6f9725d062662b11" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users_genres" DROP CONSTRAINT "FK_55e0805fdaf6f9725d062662b11"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_genres" DROP CONSTRAINT "FK_4f7ec573c98496db516a703fdbd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_roles" DROP CONSTRAINT "FK_87b8888186ca9769c960e926870"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_roles" DROP CONSTRAINT "FK_b23c65e50a758245a33ee35fda1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "audits" DROP CONSTRAINT "FK_dc00196b008faa870e8208d5abf"`,
    );
    await queryRunner.query(
      `ALTER TABLE "profiles" DROP CONSTRAINT "FK_6a23df60690da92fd263eca2e93"`,
    );
    await queryRunner.query(
      `ALTER TABLE "messages" DROP CONSTRAINT "FK_22133395bd13b970ccd0c34ab22"`,
    );
    await queryRunner.query(
      `ALTER TABLE "messages" DROP CONSTRAINT "FK_566c3d68184e83d4307b86f85ab"`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" DROP CONSTRAINT "FK_64cd97487c5c42806458ab5520c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" DROP CONSTRAINT "FK_976c0fe23c870f914acd2378e4e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" DROP CONSTRAINT "FK_41aac9c49f2f9ea9896a2660b87"`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" DROP CONSTRAINT "FK_14c9ce53a2c2a1c781b8390123e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" DROP CONSTRAINT "FK_cca2d7a421ac4b1b24b9996d101"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" DROP CONSTRAINT "FK_423b57edd033536a835c6967195"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" DROP CONSTRAINT "FK_c07ed12c532e08293fde57360a2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" DROP CONSTRAINT "FK_0121ad6b9ee630fb4753ede2bc2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" DROP CONSTRAINT "FK_4e138ff5e470441d31f649f8d9a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" DROP CONSTRAINT "FK_427785468fb7d2733f59e7d7d39"`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" DROP CONSTRAINT "FK_f08b71380816f776522a404335e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" DROP CONSTRAINT "FK_91d10b59b894d31640fe70cee14"`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" DROP CONSTRAINT "FK_3743cdeb85e3b6a5c636d6ded16"`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" DROP CONSTRAINT "FK_829db3436991bb6fbb52f71fea0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "instruments" DROP CONSTRAINT "FK_4e1ba90e8b66cb83cae2a157081"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_instruments" DROP CONSTRAINT "FK_87e16ed243a14b56b1b03f7b69e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_instruments" DROP CONSTRAINT "FK_d83bb92e5fe6d1305cd7fd6e183"`,
    );
    await queryRunner.query(
      `ALTER TABLE "locations" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "locations" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "locations" ALTER COLUMN "coordinates" TYPE geography(Point,4326)`,
    );
    await queryRunner.query(
      `ALTER TABLE "audits" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "profiles" ALTER COLUMN "location" TYPE geometry(POINT,4326)`,
    );
    await queryRunner.query(
      `ALTER TABLE "messages" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ALTER COLUMN "user_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ALTER COLUMN "event_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ALTER COLUMN "booking_status_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ALTER COLUMN "booking_time" SET DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "organizer_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "event_type_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "location" TYPE geometry(POINT,4326)`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" ALTER COLUMN "payment_status" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" ALTER COLUMN "instrument_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" ALTER COLUMN "event_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "instruments" ALTER COLUMN "instrument_type_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking_status" ALTER COLUMN "booking_status_id" SET DEFAULT nextval('booking_status_bookings_status_id_seq')`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking_status" ALTER COLUMN "booking_status_id" DROP DEFAULT`,
    );
    await queryRunner.query(
      `DROP SEQUENCE "booking_status_booking_status_id_seq"`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "user_name"`);
    await queryRunner.query(`ALTER TABLE "payments" DROP COLUMN "user_id"`);
    await queryRunner.query(
      `ALTER TABLE "events_participants" DROP CONSTRAINT "PK_8680581a87b8ae43f6402a67b5c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" DROP COLUMN "event_participant_id"`,
    );
    await queryRunner.query(`ALTER TABLE "payments" ADD "musician_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "spatial_ref_sys" ADD CONSTRAINT "spatial_ref_sys_srid_check" CHECK (((srid > 0) AND (srid <= 998999)))`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" ADD CONSTRAINT "ratings_reviews_rating_check" CHECK (((rating >= 1) AND (rating <= 5)))`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" ADD CONSTRAINT "events_positions_skill_rating_floor_check" CHECK (((skill_rating_floor >= 1) AND (skill_rating_floor <= 5)))`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_instruments" ADD CONSTRAINT "users_instruments_skill_rating_check" CHECK (((skill_rating >= 1) AND (skill_rating <= 5)))`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_genres" ADD CONSTRAINT "users_genres_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_genres" ADD CONSTRAINT "users_genres_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genres"("genre_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("role_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "audits" ADD CONSTRAINT "audits_changed_by_fkey" FOREIGN KEY ("changed_by") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "profiles" ADD CONSTRAINT "profiles_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "messages" ADD CONSTRAINT "messages_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "messages" ADD CONSTRAINT "messages_recipient_id_fkey" FOREIGN KEY ("recipient_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ADD CONSTRAINT "bookings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ADD CONSTRAINT "bookings_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("event_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ADD CONSTRAINT "bookings_booking_status_id_fkey" FOREIGN KEY ("booking_status_id") REFERENCES "booking_status"("booking_status_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ADD CONSTRAINT "events_organizer_id_fkey" FOREIGN KEY ("organizer_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ADD CONSTRAINT "events_event_type_id_fkey" FOREIGN KEY ("event_type_id") REFERENCES "event_types"("event_type_id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" ADD CONSTRAINT "ratings_reviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" ADD CONSTRAINT "ratings_reviews_rated_by_fkey" FOREIGN KEY ("rated_by") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ratings_reviews" ADD CONSTRAINT "ratings_reviews_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("event_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" ADD CONSTRAINT "payments_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("event_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" ADD CONSTRAINT "payments_musician_id_fkey" FOREIGN KEY ("musician_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" ADD CONSTRAINT "payments_payment_status_fkey" FOREIGN KEY ("payment_status") REFERENCES "payment_status"("payment_status_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" ADD CONSTRAINT "events_positions_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("event_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" ADD CONSTRAINT "events_positions_instrument_id_fkey" FOREIGN KEY ("instrument_id") REFERENCES "instruments"("instrument_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "events_participants" ADD CONSTRAINT "events_positions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "instruments" ADD CONSTRAINT "instruments_instrument_type_id_fkey" FOREIGN KEY ("instrument_type_id") REFERENCES "instrument_types"("instrument_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_instruments" ADD CONSTRAINT "users_instruments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_instruments" ADD CONSTRAINT "users_instruments_instrument_id_fkey" FOREIGN KEY ("instrument_id") REFERENCES "instruments"("instrument_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }
}
