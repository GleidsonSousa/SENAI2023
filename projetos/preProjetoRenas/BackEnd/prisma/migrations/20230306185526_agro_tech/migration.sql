/*
  Warnings:

  - You are about to drop the column `disponivel` on the `veiculo` table. All the data in the column will be lost.
  - Added the required column `status` to the `Motorista` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `motorista` ADD COLUMN `status` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `veiculo` DROP COLUMN `disponivel`,
    ADD COLUMN `disponibilidade` BOOLEAN NOT NULL DEFAULT true;
