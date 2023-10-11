const User = require("../model/user"); // Import the User model




// User Registration
//app.post("/register", 
async function register (req, res){
  try {
    const { username, email, password } = req.body;
   // const hashedPassword = await bcrypt.hash(password, 10);

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
//app.post("/login", 
async function login (req, res){
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
   res.status(200);
  } catch (error) {
    console.log(error);
    console.log("req", req.body);
    res.status(500).json({ error: "Internal server error" });
  }
}


module.exports = {login, register};
