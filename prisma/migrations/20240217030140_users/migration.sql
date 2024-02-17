-- CreateEnum
CREATE TYPE "user_contact_type" AS ENUM ('PHONE', 'MOBILE', 'MAIL');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "mail" VARCHAR(300) NOT NULL,
    "name" VARCHAR(100),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_contact" (
    "id" SERIAL NOT NULL,
    "type" "user_contact_type" NOT NULL,
    "contact" VARCHAR(100) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "user_contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_contact_user_id_contact_key" ON "user_contact"("user_id", "contact");

-- AddForeignKey
ALTER TABLE "user_contact" ADD CONSTRAINT "user_contact_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
