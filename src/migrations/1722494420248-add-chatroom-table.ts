import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddChatroomTable1722494420248 implements MigrationInterface {
  name = 'AddChatroomTable1722494420248';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "chatrooms" ("id" SERIAL NOT NULL, CONSTRAINT "PK_d190d6f785fb99dffb138cd0443" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "chatrooms_users" ("chatroom_id" integer NOT NULL, "user_id" integer NOT NULL, CONSTRAINT "PK_c5f09d7a406ae0ba82082bc7924" PRIMARY KEY ("chatroom_id", "user_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_570ffbaaedcab70d2dba8215a1" ON "chatrooms_users" ("chatroom_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_66c4ad3b0b645009200d19d86f" ON "chatrooms_users" ("user_id") `,
    );
    await queryRunner.query(`ALTER TABLE "chats" ADD "chatroom_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "chats" ADD CONSTRAINT "FK_b06e2d464d28f2d942c1a29c8e7" FOREIGN KEY ("chatroom_id") REFERENCES "chatrooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "chatrooms_users" ADD CONSTRAINT "FK_570ffbaaedcab70d2dba8215a1f" FOREIGN KEY ("chatroom_id") REFERENCES "chatrooms"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "chatrooms_users" ADD CONSTRAINT "FK_66c4ad3b0b645009200d19d86f2" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "chatrooms_users" DROP CONSTRAINT "FK_66c4ad3b0b645009200d19d86f2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "chatrooms_users" DROP CONSTRAINT "FK_570ffbaaedcab70d2dba8215a1f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "chats" DROP CONSTRAINT "FK_b06e2d464d28f2d942c1a29c8e7"`,
    );
    await queryRunner.query(`ALTER TABLE "chats" DROP COLUMN "chatroom_id"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_66c4ad3b0b645009200d19d86f"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_570ffbaaedcab70d2dba8215a1"`,
    );
    await queryRunner.query(`DROP TABLE "chatrooms_users"`);
    await queryRunner.query(`DROP TABLE "chatrooms"`);
  }
}
