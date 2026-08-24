/*
  Warnings:

  - Added the required column `machineId` to the `ProductionOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductionOrder" ADD COLUMN     "machineId" INTEGER NOT NULL;
