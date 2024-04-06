import { useContext } from "react"
import { AuthContext } from "../Hooks/AuthProvider"

function Profile() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      {
        user ?
          <div className="flex flex-col justify-center items-center mt-8 space-y-4">
            <h2 className="text-2xl font-semibold">Name: { user?.displayName}</h2>
            <img className="w-36 rounded-full" src={user?.photoURL} alt="" />
            <p className="font-medium">Email: { user?.email}</p>
          </div>
        : 'User Not Found'
      }
    </div>
  )
}

export default Profile