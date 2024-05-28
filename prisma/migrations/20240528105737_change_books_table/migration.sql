/*
  Warnings:

  - You are about to drop the column `description` on the `books` table. All the data in the column will be lost.
  - Added the required column `price` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `books` table without a default value. This is not possible if the table is not empty.
  - Made the column `published_at` on table `books` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "description",
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "stock" INTEGER NOT NULL,
ALTER COLUMN "published_at" SET NOT NULL;
