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
                role: "admin"
            },
            {
                //Event Organizer
                id: 2,
                username: "organizer",
                password: "organizer",
                email: "organizer@example.com",
                role: "organizer"
            },
            {
                //Event Participant
                id: 3,
                username: "participant",
                password: "participant",
                email: "participant@example.com",
                role: "participant"
            }
        ];
    }
}