import React, { useContext } from 'react';
import { BsEmojiSunglasses } from 'react-icons/bs';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Hooks/AuthProvider';

function NavigationBar() {
  const { user, logOut } = useContext(AuthContext);
  const [openNav, setOpenNav] = React.useState(false);
  const handleLogOut = () => {
    logOut();
  };
  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-xl font-medium"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'bg-orange-900 px-3 rounded-md text-white py-1 flex items-center'
              : 'flex items-center'
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-xl font-medium"
      >
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? 'bg-orange-900 px-3 rounded-md text-white py-1 flex items-center'
              : 'flex items-center'
          }
        >
          Profile
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-semibold text-3xl flex items-center"
          >
            Visit
            <BsEmojiSunglasses className="text-xl" />n
            <span className="text-red-700">V</span>ue
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-3">
              {user ? (
                <Button
                  onClick={handleLogOut}
                  variant="filled"
                  size="md"
                  className="inline-block"
                >
                  <span>LogOut</span>
                </Button>
              ) : (
                <Link to="/register">
                  <Button
                    variant="filled"
                    size="md"
                    className="hidden lg:inline-block"
                  >
                    <span>Sign Up</span>
                  </Button>
                </Link>
              )}
              {!user && (
                <Link to="/login">
                  <Button
                    variant="filled"
                    size="md"
                    className="hidden lg:inline-block"
                  >
                    <span>Sign in</span>
                  </Button>
                </Link>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-3">
            {user ? (
              <Button
                onClick={handleLogOut}
                variant="filled"
                size="sm"
                className="block lg:hidden w-full"
              >
                <span>LogOut</span>
              </Button>
            ) : (
              <Link className="w-full" to="/register">
                <Button
                  fullWidth
                  variant="filled"
                  size="sm"
                  className="block lg:hidden"
                >
                  <span>Sign Up</span>
                </Button>
              </Link>
            )}
            {!user && (
              <Link className="w-full" to="/login">
                <Button
                  variant="filled"
                  size="sm"
                  fullWidth
                  className="block lg:hidden"
                >
                  <span>Sign in</span>
                </Button>
              </Link>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
