-- CreateTable
CREATE TABLE "Skills" (
    "id" TEXT NOT NULL,
    "nameOfSkill" TEXT NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "street2" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "timeZone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL,
    "skillsId" TEXT NOT NULL,
    "weeks" INTEGER NOT NULL,
    "months" INTEGER NOT NULL,
    "years" INTEGER NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payments" (
    "id" TEXT NOT NULL,
    "applePay" BOOLEAN NOT NULL,
    "venmo" BOOLEAN NOT NULL,
    "check" BOOLEAN NOT NULL,
    "paypal" BOOLEAN NOT NULL,
    "paymentsId" TEXT NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SkillsToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_id_key" ON "Location"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Experience_skillsId_key" ON "Experience"("skillsId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Payments_paymentsId_key" ON "Payments"("paymentsId");

-- CreateIndex
CREATE UNIQUE INDEX "_SkillsToUser_AB_unique" ON "_SkillsToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_SkillsToUser_B_index" ON "_SkillsToUser"("B");

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "Skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_paymentsId_fkey" FOREIGN KEY ("paymentsId") REFERENCES "User"("userName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillsToUser" ADD CONSTRAINT "_SkillsToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillsToUser" ADD CONSTRAINT "_SkillsToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
