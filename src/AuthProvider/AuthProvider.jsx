import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../FireBase_confiq/firebase_confiq';
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [lodding,setLodding] = useState(true)
const [user,setUser] = useState({})

    const createUser = (email,password)=>{
        setLodding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser =(email,password)=>{
        setLodding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser =()=>{
         updateProfile(auth.currentUser,{
            displayName:"RimaKhatun",photoURL:'https://i.ibb.co/R9wkCsy/meye.jpg'
        })
        .then(()=>{
            console.log('profile is update')
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    const logOut =()=>{
        return signOut(auth)
    }

    const googleSingIn = ()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const currentUser = result.user;
            console.log(currentUser)
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }
    const gitHUbSingIn = ()=>{
        signInWithPopup(auth, gitProvider)
        .then((result) => {
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }

    useEffect(()=>{
        
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLodding(false)
        })
        return ()=>{
        return unSubscribe
        }
    },[])

    const authInfo={
        lodding,
        user,
        googleSingIn,
        gitHUbSingIn,
createUser,
updateUser,
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