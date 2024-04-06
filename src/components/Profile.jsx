import { useContext } from "react"
import { AuthContext } from "../Hooks/AuthProvider"

function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {
        user?<p>found User</p>:'User Not Found'
      }
    </div>
  )
}

export default Profile