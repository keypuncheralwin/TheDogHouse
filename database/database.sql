 createdb TheDogHouse

CREATE TABLE users(
    id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    state_code TEXT NOT NULL,
    fact TEXT,
    password TEXT NOT NULL
);

CREATE TABLE favourites(
    user_id INTEGER NOT NULL REFERENCES users(id),
    dog_id  INTEGER NOT NULL REFERENCES dogs(id)
);


CREATE TABLE dogs(
    id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    breed TEXT NOT NULL,
    age TEXT NOT NULL,
    gender TEXT NOT NULL,
    state_code TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL,
    price INTEGER NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id)
);


CREATE TABLE messages{
    id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    body TEXT,
    sender_id INTEGER NOT NULL REFERENCES users(id),
    time TIME 
}

CREATE TABLE recipient {
    id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    message_id INTEGER NOT NULL REFERENCES message_id(id), 
    recipient_id INTEGER NOT NULL REFERENCES users(id)
}

SELECT * FROM dogs INNER JOIN favourites ON dogs.id = favourites.dog_id WHERE favourites.user_id=2;