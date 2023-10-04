const express = require("express");
const session = require("express-session");

const eventRoutes = require("./routes/EventRoutes");
const testRoutes = require("./routes/TestRoutes");
const loginRoutes = require("./routes/LoginRoutes");

const path = require("path");
const { mockUsers } = require("./model/mockDB");  //TEMP: Replace when MongoDB is configured

const app = express();
const port = 3000;

//Sets up the session middleware
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  //Configure session store here using MongoDB, defaults to MemoryStore
}))

// Starts the web application
app.use(express.static("build"));

app.use("/api", eventRoutes);
app.use("/api1", loginRoutes);
app.use("/test", testRoutes);

app.listen(port, () => {
  console.log(port);
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", 'build', 'index.html'));
})