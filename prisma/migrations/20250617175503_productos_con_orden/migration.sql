-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "orden" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "Product_orden_idx" ON "Product"("orden");

-- CreateIndex
CREATE INDEX "Product_visible_orden_idx" ON "Product"("visible", "orden");
