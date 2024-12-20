import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserTable1734611135996 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "users" (
            id uuid NOT NULL DEFAULT uuid_generate_v4(),
            username varchar(256) NOT NULL,
            password_hash varchar(256) NOT NULL,
            CONSTRAINT users_pk_id PRIMARY KEY (id),
            CONSTRAINT users_un_username UNIQUE (username)
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS users;`);
  }
}
