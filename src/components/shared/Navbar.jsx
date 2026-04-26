"use client";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const userProfileImage = session?.user?.image;

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
        {isPending ? (
          <div className="flex items-center justify-between w-full max-w-4xl p-4 bg-white animate-pulse">
            {/* Skeleton Greeting Text */}
            <div className="h-8 w-64 bg-gray-200 rounded-md"></div>

            {/* Right: Skeleton Profile and Logout Section */}
            <div className="flex items-center gap-4">
              {/* Skeleton Profile Avatar */}
              <div className="w-12 h-12 bg-gray-200 rounded-full border-2 border-gray-100"></div>

              {/* Skeleton Logout Button */}
              <div className="h-12 w-28 bg-gray-300 rounded-sm"></div>
            </div>
          </div>
        ) : user ? (
          <>
            <h2 className="font-semibold">{`Hello, ${user?.name}`}</h2>
            <Image
              src={userProfileImage ? userProfileImage : userAvatar}
              width={41}
              height={41}
              alt="userAvatar"
              className="rounded-full"
              priority
            />
            <Link href={`/`}>
              <button
                onClick={async () => {
                  await authClient.signOut();
                }}
                className="bg-[#403F3F] text-white py-2 px-5 text-lg font-medium cursor-pointer"
              >
                Logout
              </button>
            </Link>
          </>
        ) : (
          <>
            <Image src={userAvatar} width={41} height={41} alt="userAvatar" />
            <Link href={`/login`}>
              <button className="bg-[#403F3F] text-white py-2 px-10 text-lg font-medium cursor-pointer">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
