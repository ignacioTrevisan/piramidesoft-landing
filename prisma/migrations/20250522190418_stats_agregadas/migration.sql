/*
  Warnings:

  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Consultas" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "visible" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "resumen" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stats" (
    "mes" TEXT NOT NULL,
    "cantidadDeProductos" INTEGER NOT NULL,
    "cantidadDeBlogs" INTEGER NOT NULL,

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("mes")
);

-- CreateTable
CREATE TABLE "UserView" (
    "id" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "statsMes" TEXT NOT NULL,

    CONSTRAINT "UserView_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stats_mes_key" ON "Stats"("mes");

-- AddForeignKey
ALTER TABLE "UserView" ADD CONSTRAINT "UserView_statsMes_fkey" FOREIGN KEY ("statsMes") REFERENCES "Stats"("mes") ON DELETE RESTRICT ON UPDATE CASCADE;
