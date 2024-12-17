import { MigrationInterface, QueryRunner } from 'typeorm';

export class Update1734203842130 implements MigrationInterface {
  name = 'Update1734203842130';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "bookings" DROP CONSTRAINT "FK_41aac9c49f2f9ea9896a2660b87"`,
    );
    await queryRunner.query(
      `CREATE SEQUENCE IF NOT EXISTS "booking_status_booking_status_id_seq" OWNED BY "booking_status"."booking_status_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking_status" ALTER COLUMN "booking_status_id" SET DEFAULT nextval('"booking_status_booking_status_id_seq"')`,
    );
    await queryRunner.query(
      `ALTER TABLE "profiles" ALTER COLUMN "location" TYPE geometry`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "location" TYPE geometry`,
    );
    await queryRunner.query(
      `ALTER TABLE "locations" ALTER COLUMN "coordinates" TYPE geography`,
    );
    // await queryRunner.query(`CREATE UNIQUE INDEX "user_types_user_type_name_key" ON "user_types" ("user_type_name") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "user_types_pkey" ON "user_types" ("user_type_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "booking_status_pkey" ON "booking_status" ("booking_status_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "messages_pkey" ON "messages" ("message_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "payment_status_pkey" ON "payment_status" ("payment_status_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "payments_pkey" ON "payments" ("payment_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "profiles_pkey" ON "profiles" ("profile_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "ratings_reviews_pkey" ON "ratings_reviews" ("id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "roles_role_name_key" ON "roles" ("role_name") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "roles_pkey" ON "roles" ("role_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "genres_genre_name_key" ON "genres" ("genre_name") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "genres_pkey" ON "genres" ("genre_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "audits_pkey" ON "audits" ("audit_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "users_pkey" ON "users" ("user_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "UQ_97672ac88f789774dd47f7c8be3" ON "users" ("email") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "bookings_pkey" ON "bookings" ("booking_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "event_types_pkey" ON "event_types" ("event_type_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "events_pkey" ON "events" ("event_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "instrument_types_pkey" ON "instrument_types" ("instrument_type_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "instruments_instrument_name_key" ON "instruments" ("instrument_name") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "instruments_pkey" ON "instruments" ("instrument_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "users_instruments_pkey" ON "users_instruments" ("instrument_id", "user_id") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "spatial_ref_sys_pkey" ON "spatial_ref_sys" ("srid") `);
    // await queryRunner.query(`CREATE UNIQUE INDEX "locations_pkey" ON "locations" ("location_id") `);
    // await queryRunner.query(`CREATE INDEX "IDX_b23c65e50a758245a33ee35fda" ON "user_roles" ("role_id") `);
    // await queryRunner.query(`CREATE INDEX "IDX_87b8888186ca9769c960e92687" ON "user_roles" ("user_id") `);
    // await queryRunner.query(`CREATE INDEX "IDX_4f7ec573c98496db516a703fdb" ON "users_genres" ("genre_id") `);
    // await queryRunner.query(`CREATE INDEX "IDX_55e0805fdaf6f9725d062662b1" ON "users_genres" ("user_id") `);
    await queryRunner.query(
      `ALTER TABLE "bookings" ADD CONSTRAINT "FK_41aac9c49f2f9ea9896a2660b87" FOREIGN KEY ("booking_status_id") REFERENCES "booking_status"("booking_status_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "bookings" DROP CONSTRAINT "FK_41aac9c49f2f9ea9896a2660b87"`,
    );
    // await queryRunner.query(`DROP INDEX "public"."IDX_55e0805fdaf6f9725d062662b1"`);
    // await queryRunner.query(`DROP INDEX "public"."IDX_4f7ec573c98496db516a703fdb"`);
    // await queryRunner.query(`DROP INDEX "public"."IDX_87b8888186ca9769c960e92687"`);
    // await queryRunner.query(`DROP INDEX "public"."IDX_b23c65e50a758245a33ee35fda"`);
    // await queryRunner.query(`DROP INDEX "public"."locations_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."spatial_ref_sys_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."users_instruments_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."instruments_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."instruments_instrument_name_key"`);
    // await queryRunner.query(`DROP INDEX "public"."instrument_types_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."events_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."event_types_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."bookings_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."UQ_97672ac88f789774dd47f7c8be3"`);
    // await queryRunner.query(`DROP INDEX "public"."users_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."audits_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."genres_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."genres_genre_name_key"`);
    // await queryRunner.query(`DROP INDEX "public"."roles_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."roles_role_name_key"`);
    // await queryRunner.query(`DROP INDEX "public"."ratings_reviews_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."profiles_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."payments_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."payment_status_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."messages_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."booking_status_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."user_types_pkey"`);
    // await queryRunner.query(`DROP INDEX "public"."user_types_user_type_name_key"`);
    await queryRunner.query(
      `ALTER TABLE "locations" ALTER COLUMN "coordinates" TYPE geography(Geometry,0)`,
    );
    await queryRunner.query(
      `ALTER TABLE "events" ALTER COLUMN "location" TYPE geometry(GEOMETRY,0)`,
    );
    await queryRunner.query(
      `ALTER TABLE "profiles" ALTER COLUMN "location" TYPE geometry(GEOMETRY,0)`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking_status" ALTER COLUMN "booking_status_id" DROP DEFAULT`,
    );
    await queryRunner.query(
      `DROP SEQUENCE "booking_status_booking_status_id_seq"`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ADD CONSTRAINT "FK_41aac9c49f2f9ea9896a2660b87" FOREIGN KEY ("booking_status_id") REFERENCES "booking_status"("booking_status_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
