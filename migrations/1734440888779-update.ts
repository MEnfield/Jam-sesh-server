import { MigrationInterface, QueryRunner } from 'typeorm';

export class Update1734440888779 implements MigrationInterface {
  name = 'Update1734440888779';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "UQ_074a1f262efaca6aba16f7ed920" UNIQUE ("user_name")`,
    );
    await queryRunner.query(
      `ALTER TABLE "locations" DROP COLUMN "coordinates"`,
    );
    await queryRunner.query(
      `ALTER TABLE "locations" ADD "coordinates" geometry(Point,4326)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_4f7ec573c98496db516a703fdb"`,
    );
  }
}
