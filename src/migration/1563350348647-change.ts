import {MigrationInterface, QueryRunner} from "typeorm";

export class change1563350348647 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `permission` DROP COLUMN `key`");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `permission` ADD `key` varchar(255) NOT NULL");
    }

}
