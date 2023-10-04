const { mockUsers } = require('../model/mockDB');

function login(req, res)
{
    const { username, password } = req.body;
    const user = mockUsers.find((u) => u.username === username && u.password === password);

    if (user) {
        req.session.user = user.id; // Store user ID in the session
        res.status(200).send('Logged in successfully');
    } else {
        res.status(401).send('Invalid credentials');
    }
}

function logout(req, res)
{
    req.session.destroy((err) => {
        if (err) {
          console.error(err);
        }
        res.redirect('/');
      });
}

module.exports = { login, logout }