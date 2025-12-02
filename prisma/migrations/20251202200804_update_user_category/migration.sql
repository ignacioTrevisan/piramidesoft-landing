-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cuit" TEXT,
ADD COLUMN     "fechaNacimiento" TIMESTAMP(3),
ADD COLUMN     "phone" TEXT;

-- CreateTable
CREATE TABLE "CategoryClient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CategoryClient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCategory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "categoryClientId" TEXT NOT NULL,

    CONSTRAINT "UserCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserCategory_userId_key" ON "UserCategory"("userId");

-- AddForeignKey
ALTER TABLE "UserCategory" ADD CONSTRAINT "UserCategory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCategory" ADD CONSTRAINT "UserCategory_categoryClientId_fkey" FOREIGN KEY ("categoryClientId") REFERENCES "CategoryClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
