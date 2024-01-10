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
('Sawfish', 'images/sawfish.jpeg', 'There are only around 5,000 adult sawfish left in the world. The main causes for their endangerment is accidental fishing and habitat destruction.'),
('Great White Shark', 'images/shark.jpeg', 'Sharks'),
('Vaquita', 'images/vaquita.jpg', 'Vaquitas are a type of dolphin found exclusively in the Gulf of California off of Mexico');