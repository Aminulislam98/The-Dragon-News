import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="max-w-7xl w-full mx-auto flex items-center justify-between py-4 relative">
      {/* Left (can be logo later) */}

      <div></div>

      {/* Center Menu */}

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex gap-6 text-[#706F6F] uppercase">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>

          <li>
            <NavLink href={"/about"}>About</NavLink>
          </li>

          <li>
            <NavLink href={"/career"}>Career</NavLink>
          </li>
        </ul>
      </div>

      {/* Right Side */}

      <div className="flex items-center gap-3 ml-auto">
        <Image src={userAvatar} width={41} height={41} alt="userAvatar" />

        <Link href="#">
          <button className="bg-[#403F3F] text-white py-2 px-5 text-lg font-medium rounded cursor-pointer">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
