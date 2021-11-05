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


CREATE TABLE messages(
    id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    body TEXT,
    sender_id INTEGER NOT NULL REFERENCES users(id),
    recipient_id INTEGER NOT NULL REFERENCES users(id),
    time TIMESTAMPTZ  
);

-- Sample user login
-- email: john.doe@example.com
-- password: dogs

-- email: tony@example.com
-- password: dogs

-- email: sally@example.com
-- password : dogs

-- email: cara@example.com
-- password: dogs

