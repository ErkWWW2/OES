const mongoose = require('mongoose');

const username = encodeURIComponent("Erik");
const password = encodeURIComponent("Xayhmj8KxcU6MZOv");
const cluster = "atlascluster.5gxwpnu.mongodb.net"

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Mongoose connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});


module.exports = db;