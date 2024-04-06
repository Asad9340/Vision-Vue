import { useContext } from "react"
import { AuthContext } from "../Hooks/AuthProvider"
import { useNavigate } from 'react-router-dom';

function PrivateRouter({ children }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  if (user) {
    return children;
  }
  return navigate('/login')
}
export default PrivateRouter