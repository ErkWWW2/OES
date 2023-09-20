import { useState } from 'react';
import UserModel from '../model/UserModel';

function UserController()  {
    const [users, setUser] = useState(UserModel);

    const addUser = (username, email, password) => {
        let id = users.length + 1;
        const newUser = { id, username, email, password };
        setUser((prevUsers) => [...prevUsers, newUser]);
    };

    const getUserById = (id) => {
        return users.find((user) => user.id === id);
    };

    const updateUser = (id, username, email, password) => {
        setUser((prevUsers) =>
            prevUsers.map((user) => (user.id === id ? { ...user, username, email, password } : user))
        );
    };

    return {
        users,
        addUser,
        getUserById,
        updateUser,
    };
}

export default UserController;