/*
  Warnings:

  - A unique constraint covering the columns `[id,username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Comments" (
    "commentId" TEXT NOT NULL,
    "episodeId" TEXT NOT NULL,
    "animeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("commentId")
);

-- CreateTable
CREATE TABLE "Replies" (
    "replyId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Replies_pkey" PRIMARY KEY ("replyId")
);

-- CreateTable
CREATE TABLE "likes" (
    "likeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "episodeId" TEXT NOT NULL,
    "animeId" TEXT NOT NULL,
    "commentId" TEXT,
    "replyId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("likeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_username_key" ON "User"("id", "username");

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_userId_username_fkey" FOREIGN KEY ("userId", "username") REFERENCES "User"("id", "username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Replies" ADD CONSTRAINT "Replies_userId_username_fkey" FOREIGN KEY ("userId", "username") REFERENCES "User"("id", "username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Replies" ADD CONSTRAINT "Replies_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comments"("commentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comments"("commentId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "Replies"("replyId") ON DELETE SET NULL ON UPDATE CASCADE;
