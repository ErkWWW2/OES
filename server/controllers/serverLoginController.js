const User = require("../model/user"); // Import the User model
// const bcrypt = require("bcrypt");
 const jwt = require("jsonwebtoken");

// User Registration
//app.post("/register", 
async function register (req, res){
  try {
    const { username, email, password } = req.body;
    //const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      password: password,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
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
    console.log("user try to login");
    const { name, password } = req.params;
    // Search if user is in the database
    const user = await User.findOne({ username: name });

    if (!user) {
      return res.status(401).json({ errorMessage: "Invalid credentials" });
    }

   // const passwordMatch = await bcrypt.compare(password, user.password);

    //if (!passwordMatch) {
   //   return res.status(401).json({ error: "Invalid credentials" });
   // }
   res.status(200).json({ token });
   res.status(200);
    
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });
  } catch (error) {
    console.log(error);
    console.log("req", req.body);
    res.status(500).json({ error: "Internal server error" });
  }
}


module.exports = {login, register};
