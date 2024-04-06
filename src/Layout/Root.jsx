import NavigationBar from "../Pages/Shared/Navbar/NavigationBar"
import {Outlet} from 'react-router-dom'
import Footer from './../Pages/Footer/Footer';
import { Toaster } from 'react-hot-toast';
function Root() {
  return (
    <div className="max-w-5xl mx-auto">
      <NavigationBar />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
}

export default Root