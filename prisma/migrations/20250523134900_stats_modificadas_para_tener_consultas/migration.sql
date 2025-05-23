/*
  Warnings:

  - Added the required column `statsMes` to the `Consultas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Consultas" ADD COLUMN     "statsMes" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Consultas" ADD CONSTRAINT "Consultas_statsMes_fkey" FOREIGN KEY ("statsMes") REFERENCES "Stats"("mes") ON DELETE RESTRICT ON UPDATE CASCADE;
