import React, {  useEffect, useState } from 'react';


import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { auth } from '../Firebase/firebas.init';
import { AuthContext } from './AuthContext';

const Provider = ({children}) => {


const googleProvider = new GoogleAuthProvider();

const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
const createUser=((email,password)=>

    {
        return createUserWithEmailAndPassword(auth,email,password)

    }
)

const googleSignIn=(()=>
{
    return signInWithPopup(auth,googleProvider)
})
const logIn=((email,password)=>
{
    return signInWithEmailAndPassword(auth,email,password)
}

)



const updateUser=((updateData)=>
{
  return  updateProfile(auth.currentUser,updateData)
})
useEffect(()=>
{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>
    {
        setUser(currentUser)
        setLoading(false)
    }
)
 return () => unSubscribe();
},[]
)

const logOut=()=>
{
   return signOut(auth)
}

const authInfo={
    user,
    setUser,
    createUser,
    logIn,
    logOut,
    loading,
    setLoading,
    updateUser,
    googleSignIn
}
    return (
        
       <AuthContext value={authInfo}>
        {
            children
        }
       </AuthContext>
    );
};

export default Provider;