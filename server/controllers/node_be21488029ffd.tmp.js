const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const app = express();
const PORT = process.env.PORT || 5002;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/loginapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});





const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

db.on('error', (error) => {
  console.error('Mongoose connection error:', error);
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});


process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection closed due to application termination');
    process.exit(0);
  });
});




///


const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserModel = mongoose.model('User', UserSchema);

app.use(express.json());
app.use(cors());

// Register a new user
app.post('/register', async (req, res) => {
  console.log("user try to register");
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      username,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login
app.post('/login', async (req, res) => {

  console.log("user try to login");
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ username }, 'your-secret-key');
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
