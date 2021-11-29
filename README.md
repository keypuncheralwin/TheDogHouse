# TheDogHouse
[Live Website](http://the-dog-house-agll.herokuapp.com/)

Online dog adoption marketplace. Looking for doggies? or hoping to find a loving home for your dog? visit TheDogHouse. Anyone can put up their dog for adoption whether you are a breeder, shelter or just someone who can no longer care for there dog.

## Features

- login and signup to keep track of dog listings
- Add a listing for your dog, upload images and other useful infomation to increase interest for your listing
- favourite dog listings and keep track these listings via the personalised dashboard 
- update/edit profile information
- directly message other users - showing your interest in their listings/ you can also delete messages
- view other user profiles
- filter throught the available dogs via their breed, age, price, name, gender and state


## Technolgies used
- CSS, HTML, Javascript, Node JS, Express JS
- PostgreSQL
- Heroku
- uppy JS (front end file upload handling)
- formidable (backend file handling)
- email validator (email validation)
- swiper js (frontend image carousel)


## Deploying it locally 

1. Once downloaded open the terminal and run ```npm install``` to install all the dependencies
2. Create a postgress database run the commands located in the schema file in your terminal to create the necessary tables
3. Create a .env file and populate it with a secret express session key and Cloudinary details or the details of you preferred image hosting site (Api key etc.)
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
