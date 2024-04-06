import { createContext } from "react"
import { auth } from './../Firebase/fitebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(auth);
// create new user for registration
const createUser = (email,password) => {
  return createUserWithEmailAndPassword(auth,email,password)
}
// Sign in user
const loginUser = (email,password) =>{
  return signInWithEmailAndPassword(auth, email, password);
}
const AuthInfo = {
  createUser,
  loginUser,
};
function AuthProvider({children}) {
  return (
    <AuthContext.Provider value={AuthInfo}>
      {children }
    </AuthContext.Provider>
  )
}

export default AuthProvider