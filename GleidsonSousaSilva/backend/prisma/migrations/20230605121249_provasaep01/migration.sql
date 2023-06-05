-- CreateTable
CREATE TABLE `Venda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `concessionaria` VARCHAR(191) NOT NULL,
    `cliente` VARCHAR(191) NOT NULL,
    `automovel` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Alocacao` ADD CONSTRAINT `Alocacao_automovel_fkey` FOREIGN KEY (`automovel`) REFERENCES `Automovel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alocacao` ADD CONSTRAINT `Alocacao_concessionaria_fkey` FOREIGN KEY (`concessionaria`) REFERENCES `Concessionaria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Venda` ADD CONSTRAINT `Venda_automovel_fkey` FOREIGN KEY (`automovel`) REFERENCES `Automovel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
