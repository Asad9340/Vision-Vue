import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <Link to='/'>
          {' '}
          <Button className="mt-6 text-xl" size="lg" color="green">
            color green
          </Button>
        </Link>
      </main>
    </div>
  );
}

export default Error;
