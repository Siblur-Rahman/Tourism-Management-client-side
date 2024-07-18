import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
// import { GithubAuthProvider } from 'firebase/auth';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   const createUser =(email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const updateUserProfile = (name, image) =>{
    return updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: image
      
      });
   }
   
   const signInUser = (email, password) =>{
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then(result=>console.log(result.user))
   }

   const signInWithGoogle = () =>{
    setLoading(true)
    signInWithPopup(auth, googleProvider)
   }
   const signInWithGithub = () =>{
    setLoading(true);
    signInWithPopup(auth, githubProvider)
    .then(result=>console.log(result.user))
   }

   const logOut = () =>{
    setLoading(true);
    return signOut(auth);
   } 

   useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false);
    });

    return ()=>{
        unSubscribe();
    }
   }, [])

    const authInfo ={
        user,
        loading,
        createUser, 
        signInUser,
        logOut,
        signInWithGoogle,
        signInWithGithub,
        updateUserProfile,  
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
    }
export default AuthProvider;