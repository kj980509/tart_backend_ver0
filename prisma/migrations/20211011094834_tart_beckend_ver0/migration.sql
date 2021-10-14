-- CreateTable
CREATE TABLE "Alarm" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "alarm" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Alarm_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Alarm" ADD CONSTRAINT "Alarm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
