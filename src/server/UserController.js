import { useState, createContext, useContext } from 'react';
import UserModel from '../model/UserModel';

//Create a context
const UserContext = createContext();

export function UserController({children})  {
    const [users, setUser] = useState(UserModel);

    const addUser = (username, email, password) => {
        let id = users.length + 1;
        let value = id;
        let label = username;
        const newUser = { id, value, username, label, email, password };
        setUser((prevUsers) => [...prevUsers, newUser]);
    };

    const getUserById = (id) => {
        return users.find((user) => user.id === id);
    };

    const updateUser = (id, username, email, password) => {
        setUser((prevUsers) => prevUsers.map((user) => (user.id === id ? { ...user, username, email, password } : user)));
    };

    return (
        <UserContext.Provider value={{ users, setUser, addUser, getUserById, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}