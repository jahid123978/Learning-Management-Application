import React, { createContext } from 'react';
import useFirebase from './useFirebase';

export const authProvider = createContext();
const AuthProvider = ({children}) => {
    const allAuth = useFirebase();
    return (
        <authProvider.Provider value={allAuth}>
            {children}
        </authProvider.Provider>
    );
};
// window.location.reload()
export default AuthProvider;