/*
  Warnings:

  - Added the required column `nombre` to the `Consultas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Consultas` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ConsultaStatus" AS ENUM ('PENDIENTE', 'ATENDIDA');

-- AlterTable
ALTER TABLE "Consultas" ADD COLUMN     "nombre" TEXT NOT NULL,
ADD COLUMN     "productId" TEXT,
ADD COLUMN     "status" "ConsultaStatus" NOT NULL DEFAULT 'PENDIENTE',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "Consultas_status_idx" ON "Consultas"("status");

-- CreateIndex
CREATE INDEX "Consultas_createdAt_idx" ON "Consultas"("createdAt");

-- AddForeignKey
ALTER TABLE "Consultas" ADD CONSTRAINT "Consultas_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
