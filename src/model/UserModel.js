//Model for users
class UserModel 
{
    constructor()   //Generates a set of three users, one for each role
    {
        this.users = [
            {
                //Administrator
                id: 1,
                username: "admin",
                password: "admin",
                email: "admin@example.com",
            },
            {
                //Event Organizer
                id: 2,
                username: "organizer",
                password: "organizer",
                email: "organizer@example.com",
            },
            {
                //Event Participant
                id: 3,
                username: "participant",
                password: "participant",
                email: "participant@example.com",
            }
        ];
    }

    getAllUsers() //Returns all users
    {
        return this.users;
    }

    getUserById(id) //Returns a specific user based on submitted ID
    {
        return this.users.find((user) => user.id === id);
    }

    addUser(user) //Adds a user (HIGHLY TEMPORARY, will most likely change)
    {
        newUser.id = this.users.length + 1;
        newUser.username = user[0];
        newUser.password = user[1];
        newUser.email = user[2];
        this.users.push(newUser);
        return newUser;
    }
}

export default UserModel;