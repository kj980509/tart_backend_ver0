-- CreateTable
CREATE TABLE "_Folllow Relation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Folllow Relation_AB_unique" ON "_Folllow Relation"("A", "B");

-- CreateIndex
CREATE INDEX "_Folllow Relation_B_index" ON "_Folllow Relation"("B");

-- AddForeignKey
ALTER TABLE "_Folllow Relation" ADD FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Folllow Relation" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
