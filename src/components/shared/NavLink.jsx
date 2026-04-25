"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const matchedPath = pathName === href;
  return (
    <Link
      className={`${matchedPath ? "border-b-2 border-b-black text-black " : undefined} hover:text-black`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
