const express = require("express");
const session = require("express-session");
const MongoDBSessionStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const eventRoutes = require("./routes/EventRoutes");
const testRoutes = require("./routes/TestRoutes");
const loginRoutes = require("./routes/LoginRoutes");
const userRoutes = require("./routes/UserRoutes");
const path = require("path");

// Variables for the port of the app
const app = express();
const port = 3000;


// Variables to connect to the database
const username = encodeURIComponent("Erik");
const password = encodeURIComponent("Xayhmj8KxcU6MZOv");
const cluster = "atlascluster.5gxwpnu.mongodb.net"

// Specify the url database to connect to
mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const sessionStore = new MongoDBSessionStore({
  uri: `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`,
  collection: 'sessions', // Name of the collection where sessions will be stored
});

const db = mongoose.connection;

// Start the database
db.on('error', (error) => {
  console.error('Mongoose connection error:', error);
});

// Connect to the database connection
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Starts the web application
app.use(express.static("build"));
app.use(express.json());

//Set up of session
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie:{
    secure: false,
    maxAge: 1000*60*60,
  },
  store: sessionStore,
}));

//app.use(express.static("build"));
// Get routes and middleware
app.use("/api", eventRoutes);
app.use("/test", testRoutes);
app.use("/login", loginRoutes);
app.use("/user", userRoutes);
app.set()


// Start listening on the specified port
app.listen(port, () => {
  console.log("App listening on port: ", port);
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", 'build', 'index.html'));
})