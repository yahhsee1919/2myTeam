import Button from "./Button";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-midnightGreen z-10 relative pb-12 ">
      <div className="flex p-6  items-center mx-auto justify-between  z-0 lg:px-24 xl:px-44">
        <div className="flex items-center justify-between  text-white">
          <Link to="/" className="p-4 ">
            <h1 className="text-white font-bold text-3xl mr-16">myteam</h1>
          </Link>
          <Link
            to="/about"
            className="hidden text-md font-semibold md:block mr-14 hover:text-lightCoral"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hidden text-md font-semibold md:block hover:text-lightCoral"
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:block">
          <Button />
        </div>
        {nav ? (
          <AiOutlineClose
            size={20}
            color="white"
            className="z-40 md:hidden"
            onClick={handleNav}
          />
        ) : (
          <AiOutlineMenu
            size={20}
            color="white"
            className="z-40 md:hidden"
            onClick={handleNav}
          />
        )}
      </div>

      <div
        className={
          nav
            ? "z-10 bg-black bg-opacity-50 h-screen w-screen absolute -mt-32 ease-in-out duration-500"
            : "z-10 bg-black bg-opacity-50 h-screen w-screen hidden -mt-32 "
        }
        onClick={handleNav}
      >
        <div
          className={
            nav
              ? "flex flex-col items-start text-left  text-white pl-4 z-30 py-24 w-[75%] space-y-4 bg-policeBlue absolute right-0 h-screen ease-in-out duration-500"
              : "flex flex-col items-start text-left  text-white pl-4 z-30 py-24 w-[75%] space-y-4 bg-policeBlue absolute right-[-100%] h-screen ease-in-out duration-500"
          }
        >
          <Link
            to="/about"
            className="p-4 text-xl font-bold hover:text-lightCoral hover:border-b-2 hover:border-lightCoral "
          >
            About
          </Link>
          <Link
            to="/contact"
            className="p-4 text-xl font-bold hover:text-lightCoral hover:border-b-2 hover:border-lightCoral"
          >
            Contact
          </Link>
          <div className="pt-12 mx-auto">
            <Button />
          </div>
          <div className="">
            <img
              src="../../public/images/bg-pattern-about-1-mobile-nav-1.svg"
              alt=""
              className="absolute bottom-0 scale-150 -right-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
