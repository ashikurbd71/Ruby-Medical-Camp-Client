/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth } from './Firebase.config'
import { removeToken } from '../API/userData'




export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

//  createuser
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

//  signuser
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

// sign google
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

//   reset pasword
  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

// logout 
  const logOut = async () => {
    setLoading(true)
    await removeToken()
    return signOut(auth)
  }


//   updteprofile 

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('CurrentUser-->', currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider


// const userEmail =currentuser?.email || user?.email
// const loguser ={ 'email': userEmail}
// setLoading(false)
// setUser(currentuser)
// console.log(currentuser)

//  if(currentuser){
//         axios.post('https://blogsph-server.vercel.app/jwt',loguser,{withCredentials:true})
//         .then(res => console.log(res.data))
//     }else{

//         axios.post('https://blogsph-server.vercel.app/logout',loguser,{withCredentials:true})
//         .then(res => console.log(res.data))
//     }