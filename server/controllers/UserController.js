const User = require("../model/user");

async function getCurrentUserId(req, res)
{
    try{
        res.json({currentUserId: req.session.user})
    } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { getCurrentUserId }