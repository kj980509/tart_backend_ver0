-- CreateTable
CREATE TABLE "Feed" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeedPhoto" (
    "id" SERIAL NOT NULL,
    "feedId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeedPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeedLike" (
    "id" SERIAL NOT NULL,
    "feedId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeedLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeedComment" (
    "id" SERIAL NOT NULL,
    "feedId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeedComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Feed" ADD CONSTRAINT "Feed_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedPhoto" ADD CONSTRAINT "FeedPhoto_feedId_fkey" FOREIGN KEY ("feedId") REFERENCES "Feed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedLike" ADD CONSTRAINT "FeedLike_feedId_fkey" FOREIGN KEY ("feedId") REFERENCES "Feed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedLike" ADD CONSTRAINT "FeedLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedComment" ADD CONSTRAINT "FeedComment_feedId_fkey" FOREIGN KEY ("feedId") REFERENCES "Feed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedComment" ADD CONSTRAINT "FeedComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
