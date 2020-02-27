import {MigrationInterface, QueryRunner} from "typeorm";

export class addPhone1580634421346 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `phone` varchar(11) NOT NULL DEFAULT ''");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `phone`");
    }

}
