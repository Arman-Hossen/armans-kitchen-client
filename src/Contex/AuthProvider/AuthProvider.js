import React, {  createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../Firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {

    const[user, setUser] =useState(null);
    const [loading , setLoading] = useState(true)

    const createUser =(email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }
    const googleProvider = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
      };


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            return unsubscribe();
        }
    },[])
    const authinfo ={
        user,
        createUser,
        loading,
        login,
        logOut,
        googleProvider

    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;