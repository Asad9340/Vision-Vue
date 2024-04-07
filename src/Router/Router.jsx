import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Loagin/Login';
import Register from '../Pages/Register/Register';
import Profile from '../components/Profile';
import Error from '../Pages/Error/Error';
import PrivateRouter from './PrivateRouter';
import GlassesDetails from '../components/GlassesDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/glasses/:id',
        element: <GlassesDetails />,
        loader:()=>fetch('/glasses.json'),
      },
      {
        path: '/profile',
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
