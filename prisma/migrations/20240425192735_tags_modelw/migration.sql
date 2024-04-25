/*
  Warnings:

  - The primary key for the `Skills` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Skills` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Experience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SkillsToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_skillsId_fkey";

-- DropForeignKey
ALTER TABLE "_SkillsToUser" DROP CONSTRAINT "_SkillsToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_SkillsToUser" DROP CONSTRAINT "_SkillsToUser_B_fkey";

-- AlterTable
ALTER TABLE "Skills" DROP CONSTRAINT "Skills_pkey",
ADD COLUMN     "experience" INTEGER,
ADD COLUMN     "userId" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL;

-- DropTable
DROP TABLE "Experience";

-- DropTable
DROP TABLE "_SkillsToUser";

-- AddForeignKey
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
