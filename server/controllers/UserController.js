const { mockUsers } = require('../model/mockDB');

function getUserById(req, res)
{
    let id = req.params.id;
    let user = mockUsers.find((user) => user.id === id);
    console.log(user);
    res.json({ user: user });
}

module.exports = { getUserById }