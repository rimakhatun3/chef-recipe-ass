import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../FireBase_confiq/firebase_confiq';
const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [lodding,setLodding] = useState(true)
const [user,setUser] = useState('')

    const createUser = (email,password)=>{
        setLodding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser =(email,password)=>{
        setLodding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        return signOut(auth)
    }
    const authInfo={
        lodding,
        user,
createUser,
loginUser,
logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;