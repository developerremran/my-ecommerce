import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';
import axios from 'axios';
import { data } from 'autoprefixer';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)

    // firebaseConnected

    // newUserRegisterEmailAndPassword 

    const newUser = (email, password) => {
        setLoading(true)
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // email and password login 
    const oldUser = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }
    // user out 
    const userLogOut=()=>{
        setLoading(true)
        return signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    // user name and photo 

    const userUpdateNP=(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
          })
    }






    // current user check 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged((auth), currentUser => {
            setUser(currentUser)
            if(currentUser){
                axios.post(`${import.meta.env.VITE_lOCAL_Server}/jwt`, {email : currentUser?.email}).then(data => {
                    // console.log(data.data.token);
                    localStorage.setItem('access-token', data.data.token)
                })
            }else{
                 localStorage.removeItem('access-token')   
            }
            setLoading(false)
            
        })
        return () => {
            return unSubscribe
        }
    }, [])



    const authInfo = {
        user,
        newUser,
        oldUser,
        loading,
        userLogOut,
        userUpdateNP,
        setLoading

        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;