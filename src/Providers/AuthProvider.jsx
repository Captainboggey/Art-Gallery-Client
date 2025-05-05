import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebaseInIt/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const signUpUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser= (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const signInWithGit = ()=>{
        setLoading(true);
        return signInWithPopup(auth,gitProvider)
    }

    const signOutUser =()=>{
        setLoading(true);
        return signOut(auth);
    }

    
    


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        });
        return()=>{
            unSubscribe();
        }
    },[])

    const authInfo={
        user,
        signUpUser,
        signInUser,
        signInWithGoogle,signInWithGit,signOutUser,loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;