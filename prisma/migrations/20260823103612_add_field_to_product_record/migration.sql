/*
  Warnings:

  - Made the column `repairedAt` on table `MaintenanceLog` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `inventoryId` to the `ProductionRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `ProductionRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MaintenanceLog" ALTER COLUMN "repairedAt" SET NOT NULL,
ALTER COLUMN "repairedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ProductionRecord" ADD COLUMN     "inventoryId" INTEGER NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;
