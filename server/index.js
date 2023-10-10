const express = require("express");
const mongoose = require("mongoose");
const eventRoutes = require("./routes/EventRoutes");
const testRoutes = require("./routes/TestRoutes");
const path = require("path");
const cors = require("cors");

// Variables for the port of the app
const app = express();
const port = 3001;

// Variables to connect to the database
const username = encodeURIComponent("Erik");
const password = encodeURIComponent("Xayhmj8KxcU6MZOv");
const cluster = "atlascluster.5gxwpnu.mongodb.net"

// Specify the url database to connect to
mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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
app.use(express.json());

// Get routes and middleware
app.use("/api", eventRoutes);
app.use("/test", testRoutes);
app.use(
  cors({
      origin: [`http://localhost:${3001}`],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
  })
);


// Start listening on the specified port
app.listen(port, () => {
  console.log(port);
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", 'build', 'index.html'));
})