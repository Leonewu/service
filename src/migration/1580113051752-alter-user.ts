import {MigrationInterface, QueryRunner} from "typeorm";

export class alterUser1580113051752 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `nickname` `nickname` varchar(255) NOT NULL DEFAULT ''");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `openId`");
        await queryRunner.query("ALTER TABLE `user` ADD `openId` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `openId`");
        await queryRunner.query("ALTER TABLE `user` ADD `openId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `nickname` `nickname` varchar(255) NOT NULL");
    }

}
