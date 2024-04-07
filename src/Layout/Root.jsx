import NavigationBar from "../Pages/Shared/Navbar/NavigationBar"
import {Outlet} from 'react-router-dom'
import Footer from './../Pages/Footer/Footer';
import { Toaster } from 'react-hot-toast';
function Root() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mx-4">
        <NavigationBar />
        <Outlet />
        <Footer />
        <Toaster />
      </div>
    </div>
  );
}

export default Root