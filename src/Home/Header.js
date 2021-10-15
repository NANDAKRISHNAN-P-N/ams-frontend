import React from "react";
import logo from "../Icons/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    // <div className="min-w-screen w-screen flex justify-center xs:h-2/5 md:h-3/5 lg:h-4/5 relative">
    <div className="min-w-screen w-screen overflow-x-hidden flex justify-center h-screen relative">
      <img
        src="https://wallpapercave.com/wp/XBKkgan.jpg"
        alt=""
        className="absolute w-screen h-full object-cover"
      />
      <div className="absolute  py-4 text-center space-y-4 text-white sm:top-20 md:top-28 lg:top-40 2xl:top-56 w-4/5 h-2/5">
        <p className="sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl  font-light lg:tracking-normal tracking-wider xl:tracking-wider uppercase">welcome to mits</p>
          <p className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-thin lg:tracking-wide tracking-wider uppercase"> admission management system</p>
      </div>
      <div className="w-full xs:h-6 sm:h-8 lg:h-10 text-white lg:text-lg px-8 bg-transparent flex items-center justify-between mt-4 absolute">
        <div className="flex h-full space-x-1 items-center">
        <img src={logo} alt="" className="sm:w-11 sm:h-11 lg:w-14 lg:h-14" />
        <p className=" sm:text-lg lg:text-2xl">AMS</p>
        </div>
        <div className="flex items-center h-full space-x-4 lg:space-x-6">
          <Link to="nri" className="h-full cursor-pointer hover:bg-torch-red-500 w-20 lg:w-24 flex items-center justify-center rounded-full bg-transparent border-2">
            Register
          </Link>
          <Link to='login' className="h-full cursor-pointer hover:bg-white hover:text-black w-20 lg:w-24 flex items-center justify-center rounded-full bg-transparent border-2">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
