const User = require("../model/user"); // Import the User model
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User Registration
//app.post("/register", 
async function register (req, res){
  try {
    const { name, email, password } = req.body;
    
    const user = await User.findOne({ username: name });

    if (!user)
    {
      const hashedPassword = await bcrypt.hash(password, 10);

      const lastUser = await User.findOne().sort({ _id: -1 });

      const newId = (Number)(lastUser.id + 1);

      const user = new User({
        id: newId,
        value: newId,
        username: name,
        label: name,
        email,
        password: hashedPassword,
      });

      await user.save();

      res.status(201).json({ message: "User registered successfully" });
    }
    else {
      res.status(400).json( {message: "User already exists" });
    }
  } catch (error) {
    console.log(error);
    console.log("req", req.body);
    res.status(500).json({ error: "Internal server error" });
  }
}

// User Login
//app.get("/user/login/:name/:password)", 
async function login (req, res){
  try {
    console.log("user attempted to login");
    const { name, password } = req.params;
    // Search if user is in the database
    const user = await User.findOne({ username: name });

    console.log(user);

    if (!user) {
      return res.status(401).json({ errorMessage: "Invalid credentials" });
    }

    // This currently causes an error due to the admin passwords not being encrypted
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    
    res.status(200);

    req.session.user = user.id;

    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    console.log("req", req.body);
    res.status(500).json({ error: "Internal server error" });
  }
}


module.exports = {login, register};
