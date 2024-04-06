import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Loagin/Login';
import Register from '../Pages/Register/Register';
import Profile from '../components/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/profile',
        element:<Profile/>
      },
      {
        path: '/login',
        element:<Login/>,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ]
  },
]);

export default router;
