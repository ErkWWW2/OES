import { useState, createContext, useContext } from 'react';
import UserModel from '../client/model/UserModel';

//Create a context
const UserContext = createContext();

export function UserController({children})  {
    const [users, setUser] = useState(UserModel);   //A state is created, using the user-model as a basis
    const [logUser, setLogUser] = useState(-1);     //Rudimentary way to keep track of logged-in user

    /*
    Method to add a new user (User registration)
    Parameters:
        username:   string, containing the users chosen username
        email:      string, containing the users chosen email
        password:   string, containing the users chosen password
    Returns:
        Nothing, utilizes the setUser-function to add the user to the created state
    */
    const addUser = (username, email, password) => {
        let id = users.length + 1;
        let value = id;
        let label = username;
        const newUser = { id, value, username, label, email, password };
        setUser((prevUsers) => [...prevUsers, newUser]);
    };

    /*
    Method to find a user by their ID
    Parameters:
        id: number representing the user's ID
    Returns:
        The user whose ID matches the parameter
    */
    const getUserById = (id) => {
        return users.find((user) => user.id === id);
    };

    /*
    Method to update an already existing user
    Parameters:
        id:         number representing the user's ID
        username:   string, containing the users chosen username
        email:      string, containing the users chosen email
        password:   string, containing the users chosen password
    Returns:
        Nothing, reconfigures the user with the provided values
    */
    const updateUser = (id, username, email, password) => {
        setUser((prevUsers) => prevUsers.map((user) => (user.id === id ? { ...user, username, email, password } : user)));
    };

    /*
    Method to set currently logged-in user
    Parameters:
        id: number representing the user's ID
    Returns:
        Nothing, sets the variable logUser to correspond to the logged-in users ID
    */
    const confLogUser = (id) => {
        setLogUser(id); 
    };

    return (
        <UserContext.Provider value={{ users, setUser, addUser, getUserById, updateUser, logUser, confLogUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}