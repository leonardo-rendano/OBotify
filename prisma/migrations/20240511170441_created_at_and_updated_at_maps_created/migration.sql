/*
  Warnings:

  - You are about to drop the column `createadAt` on the `music` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `music` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "music" DROP COLUMN "createadAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
