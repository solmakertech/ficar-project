-- CreateTable
CREATE TABLE `FichaCatalografica` (
    `id` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `autor` VARCHAR(191) NOT NULL,
    `curso` VARCHAR(191) NULL,
    `tipo` VARCHAR(191) NULL,
    `programa` VARCHAR(191) NULL,
    `periodo` VARCHAR(191) NULL,
    `ano` INTEGER NULL,
    `mes` INTEGER NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
