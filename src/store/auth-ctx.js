import {createContext} from 'react';
export const AuthContext = createContext({
    isLoggedIn: false,
    signIn: () => {},
    signOut: () => {}
});