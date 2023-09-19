-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "grau_form" TEXT NOT NULL,
    "temp_form" TEXT NOT NULL,
    "qtd_mat" REAL NOT NULL,
    "dat_inicio" DATETIME NOT NULL,
    "dat_final" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "cornell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "materia" TEXT NOT NULL,
    "idea_princ" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "resume" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
