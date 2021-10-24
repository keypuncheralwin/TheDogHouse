createdb TheDogHouse

CREATE TABLE users(
    id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    state_code VARCHAR(6) NOT NULL,
    fact TEXT,
    password TEXT NOT NULL
);

CREATE TABLE favorites(
    user_id INTEGER NOT NULL REFERENCES users(id),
    pet_id  INTEGER NOT NULL REFERENCES pet(id)
);

Puppy
Adult 
Senior 

CREATE TABLE pet(
    id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    breed TEXT NOT NULL,
    age TEXT NOT NULL,
    gender TEXT NOT NULL,
    color TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL,
    price INTEGER NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id)
);


CREATE TABLE pet_location(
   state_code VARCHAR(6) NOT NULL,
   pet_id INTEGER NOT NULL REFERENCES pet(id)
);