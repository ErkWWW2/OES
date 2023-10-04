const express = require("express");
const eventRoutes = require("./routes/EventRoutes");
const path = require("path");

const app = express();
const port = 3000;

// Starts the web application
app.use(express.static("build"));

app.use("/api", eventRoutes);

app.listen(port, () => {
  console.log(port);
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", 'build', 'index.html'));
})