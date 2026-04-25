"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CategoriesLink = ({ href, children }) => {
  const pathName = usePathname();
  const matchedPath = pathName === href;
  return (
    <Link
      className={`${matchedPath ? "bg-[#E7E7E7] " : undefined} hover:bg-[#E7E7E7]`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default CategoriesLink;
