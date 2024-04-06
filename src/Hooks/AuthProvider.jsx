import { createContext, useEffect, useState } from "react"
import { auth } from './../Firebase/fitebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

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
      else {
        console.log('user not found');
      }
    })
  }, []);

  const AuthInfo = {
    createUser,
    loginUser,
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider