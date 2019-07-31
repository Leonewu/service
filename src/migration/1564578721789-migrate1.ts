import {MigrationInterface, QueryRunner} from "typeorm";

export class migrate11564578721789 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `folder` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `parentId` int NOT NULL, `rootId` int NOT NULL DEFAULT 0, `ownerType` varchar(255) NULL DEFAULT null, `ownerId` int NOT NULL DEFAULT 0, `sn` varchar(255) NOT NULL DEFAULT '', `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `age23`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `age1`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `lastName`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `firstName`");
        await queryRunner.query("ALTER TABLE `folder` DROP COLUMN `parentId`");
        await queryRunner.query("ALTER TABLE `folder` DROP COLUMN `rootId`");
        await queryRunner.query("ALTER TABLE `folder` DROP COLUMN `ownerType`");
        await queryRunner.query("ALTER TABLE `folder` DROP COLUMN `ownerId`");
        await queryRunner.query("ALTER TABLE `folder` DROP COLUMN `sn`");
        await queryRunner.query("ALTER TABLE `user` ADD `name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `temperament` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `lifeSpan` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `altNames` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `wikipediaUrl` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `origin` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `weightImperial` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `experimental` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `hairless` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `natural` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `rare` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `rex` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `suppressTail` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `shortLegs` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `hypoallergenic` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `adaptability` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `affectionLevel` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `countryCode` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `childFriendly` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `dogFriendly` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `energyLevel` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `grooming` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `healthIssues` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `intelligence` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `sheddingLevel` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `socialNeeds` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `strangerFriendly` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `vocalisation` int NOT NULL");
        await queryRunner.query("ALTER TABLE `folder` ADD `parentId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `folder` ADD `rootId` int NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `folder` ADD `ownerType` varchar(255) NULL DEFAULT null");
        await queryRunner.query("ALTER TABLE `folder` ADD `ownerId` int NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `folder` ADD `sn` varchar(255) NOT NULL DEFAULT ''");
        await queryRunner.query("ALTER TABLE `folder` ADD `folderId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `folder` ADD `url` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `firstName` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `lastName` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `age1` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `age23` int NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `age23`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `age1`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `lastName`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `firstName`");
        await queryRunner.query("ALTER TABLE `folder` DROP COLUMN `url`");
        await queryRunner.query("ALTER TABLE `folder` DROP COLUMN `folderId`");
        await queryRunner.query("ALTER TABLE `folder` DROP COLUMN `sn`");
        await queryRunner.query("ALTER TABLE `folder` DROP COLUMN `ownerId`");
        await queryRunner.query("ALTER TABLE `folder` DROP COLUMN `ownerType`");
        await queryRunner.query("ALTER TABLE `folder` DROP COLUMN `rootId`");
        await queryRunner.query("ALTER TABLE `folder` DROP COLUMN `parentId`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `vocalisation`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `strangerFriendly`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `socialNeeds`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `sheddingLevel`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `intelligence`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `healthIssues`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `grooming`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `energyLevel`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `dogFriendly`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `childFriendly`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `countryCode`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `affectionLevel`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `adaptability`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `hypoallergenic`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `shortLegs`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `suppressTail`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `rex`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `rare`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `natural`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `hairless`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `experimental`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `weightImperial`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `origin`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `wikipediaUrl`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `altNames`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `lifeSpan`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `temperament`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `folder` ADD `sn` varchar(255) NOT NULL DEFAULT ''");
        await queryRunner.query("ALTER TABLE `folder` ADD `ownerId` int NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `folder` ADD `ownerType` varchar(255) NULL DEFAULT null");
        await queryRunner.query("ALTER TABLE `folder` ADD `rootId` int NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `folder` ADD `parentId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `firstName` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `lastName` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `age1` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `age23` int NOT NULL");
        await queryRunner.query("DROP TABLE `folder`");
    }

}
