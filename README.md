# TheDogHouse

On stop shop to find you next best friend. Looking for a doggies visit TheDogHouse. It is online makretplace for doggies. Anyone can put up their dog for adoption whether you are a breeder, shelter or just someone who can no longer care for there dog

## Features

- User can login and signup
- Users can upload a dog and edit their posting 
- Users can keep track of th
- Users can favourite the pet they like and keep track these pets on their local dashboard 
- Users can update their profile
- Users can message other users - showing their interest in the pet they like
- Users can delete messages
- Users can view the profile of other users 
- Users can sort the available pets according to their breed, age, price, name, gender and state


## Technolgies used
- CSS, HTML, Javascript
- Express JS
- Postgress
- Heroku
- uppy for video uploads
- formidable for backend photo/file handling
- email validator for backend email validation
- swiper js for viewing images


## Deploying it locally 

1. Once downloaded open the terminal and run ```npm install```
2. Create a postgress database run the following commands in your termianl:

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

3. Create a .env file and insert the following code:

EXPRESS_SESSION_SECRET_KEY=“secret key no one can know!”
  CLOUD_NAME=dmlndgrhc
  API_KEY=588566966571468
  API_SECRET=dEUp7V7K-Xtd5d9x13f2gC2Rrgg


4. Launch the app by running node app.js


## Future Imrpovements 
  
- Creating additional Pet categories 
- Email verification
- Instant messaging
- Implementing unit and integration testing
- Improving the security of our website
- More specific locations
- Donation page for Pet Shelters, Pet Rescue orgs
- Implementing more back buttons
- Allowing users to upload a profile pic




