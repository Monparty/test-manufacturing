/*
  Warnings:

  - You are about to drop the column `inventoryId` on the `ProductionRecord` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `ProductionRecord` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductionRecord" DROP COLUMN "inventoryId",
DROP COLUMN "quantity";

-- AddForeignKey
ALTER TABLE "ProductionRecord" ADD CONSTRAINT "ProductionRecord_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
