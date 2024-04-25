/*
  Warnings:

  - A unique constraint covering the columns `[nameOfSkill]` on the table `Skills` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Skills_nameOfSkill_key" ON "Skills"("nameOfSkill");
