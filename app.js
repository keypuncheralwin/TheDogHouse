const express = require("express");
const eiows = require("eiows");


const dotenv = require('dotenv')
dotenv.config();

const db = require("./database/db"); // The postgres connection we already have
const expressSession = require("express-session"); // Express library to handle sessions

// We need to store sessions in the DB, otherwise it'll forget them all when you restart the server.
const connectPgSimple = require("connect-pg-simple");
const pgSession = connectPgSimple(expressSession);

const petsController = require("./controllers/pets");
const sessionController = require("./controllers/session");
const userController= require("./controllers/user");

const errorHandler = require('./middleware/error')
const logMiddleware = require('./middleware/logger');
const { Server } = require("eiows");



const app = express();

const port = process.env.PORT || 3000;

app.use(logMiddleware)

app.use(
  expressSession({
    store: new pgSession({
      pool: db, // Connects to our postgres db
      createTableIfMissing: true, // Creates a session table in your database (go look at it!)
    }),
    secret: process.env.EXPRESS_SESSION_SECRET_KEY,
  })
);


app.use(express.static("client"));
app.use(express.json());

// before or after /api/challenges
app.use("/api/sessions", sessionController);

app.use("/api/pets", petsController);

app.use("/api/user", userController);




app.use(errorHandler)

const server = app.listen(port)


const io = require("socket.io")(server);

io.on('connection', (socket) => {
	console.log('New user connected')

	// //default username
	// socket.username = "Anonymous"

  //   //listen on change_username
  //   socket.on('change_username', (data) => {
  //       socket.username = data.username
  //   })

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        io.sockets.emit('new_message', {message : data.message, username : socket.username});
    })

    //listen on typing
    socket.on('typing', (data) => {
    	socket.broadcast.emit('typing', {username : socket.username})
    })
})
