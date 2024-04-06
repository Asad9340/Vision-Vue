import { createContext, useEffect, useState } from "react"
import { auth } from './../Firebase/fitebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

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
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    })
  }, []);

  //sign out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log('sign out success');
        setUser(null);
      })
      .catch((error) => console.log(error));
  }

  const AuthInfo = {
    createUser,
    loginUser,
    user,
    setUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider