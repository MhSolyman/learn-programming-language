import React from 'react';
import { createContext } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {



    


    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    };
    const authInfo = { providerLogin };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;