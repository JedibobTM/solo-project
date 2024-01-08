CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "animals" (
  "id" SERIAL PRIMARY KEY,
  "animal" VARCHAR(120) NOT NULL,
  "image"  VARCHAR(120) NOT NULL,
  "description" TEXT NOT NULL
);

INSERT INTO "animals" ("animal", "image", "description")
VALUES 
('Sawfish', 'sawfish.jpeg', 'There are only around 5,000 adult sawfish left in the world. The main causes for their endangerment is accidental fishing and habitat destruction.')