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

async function getUserById(req, res)
{
    try{
        console.log(req.params.id);
        const id = parseInt(req.params.id);
        const user = await User.findOne({id: id});
        console.log(user);
        res.json({user});
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

async function updateUser(req, res)
{
    try{
        const filter = {id: req.params.id};
        const updateOperation = {
            $set: {
                username: req.params.username,
                email: req.params.email,
                password: req.params.password
            }
        };

        await User.updateOne(filter, updateOperation);
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { getCurrentUserId, getUserById, updateUser };