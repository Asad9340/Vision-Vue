import { createContext, useEffect, useState } from "react"
import { auth } from './../Firebase/fitebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(auth);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // create new user for registration
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Sign in user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //auth change
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
   })
    return ()=>unsubscribe();
  }, []);

  //sign out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
  }
  //google logIn
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    signInWithPopup(auth,googleProvider)
  }

  const AuthInfo = {
    createUser,
    loginUser,
    user,
    setUser,
    logOut,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider