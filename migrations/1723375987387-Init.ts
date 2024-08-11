import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1723375987387 implements MigrationInterface {
    name = 'Init1723375987387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" character varying(36) NOT NULL, "name" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "email" character varying(255), "phone" character varying(10), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("product_id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" numeric NOT NULL, "stock_quantity" integer NOT NULL, CONSTRAINT "PK_a8940a4bf3b90bd7ac15c8f4dd9" PRIMARY KEY ("product_id"))`);
        await queryRunner.query(`CREATE TABLE "transactions" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "quantity" integer NOT NULL, "productProductId" integer, CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "country" ("id" SERIAL NOT NULL, "country_name" character varying NOT NULL, CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "config" ("id" integer NOT NULL, "minting_phrase" TIMESTAMP, "reveal_phrase" TIMESTAMP, CONSTRAINT "PK_d0ee79a681413d50b0a4f98cf7b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_roles" ("userId" character varying(36) NOT NULL, "rolesId" integer NOT NULL, CONSTRAINT "PK_b01ef935279d458c586ffd75ec1" PRIMARY KEY ("userId", "rolesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_472b25323af01488f1f66a06b6" ON "user_roles" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_13380e7efec83468d73fc37938" ON "user_roles" ("rolesId") `);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "fk_transactions_productProductId" FOREIGN KEY ("productProductId") REFERENCES "products"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "fk_user_roles_userId" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "fk_user_roles_rolesId" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "fk_user_roles_rolesId"`);
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "fk_user_roles_userId"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "fk_transactions_productProductId"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_13380e7efec83468d73fc37938"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_472b25323af01488f1f66a06b6"`);
        await queryRunner.query(`DROP TABLE "user_roles"`);
        await queryRunner.query(`DROP TABLE "config"`);
        await queryRunner.query(`DROP TABLE "country"`);
        await queryRunner.query(`DROP TABLE "transactions"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}
