/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `Sport` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Sport_key_key" ON "Sport"("key");
