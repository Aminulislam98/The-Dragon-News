import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <section className="max-w-full w-full   py-5 md:py-10 ">
      <div className="max-w-7xl w-full mx-auto  flex flex-col justify-center items-center">
        <Image
          src={Logo}
          width={400}
          height={400}
          alt="Logo"
          className="mb-5"
        ></Image>
        <p className="text-lg text-[#706F6F] font-normal mb-2.5">
          Journalism Without Fear or Favour
        </p>
        <h3 className="font-medium text-xl text-[#403F3F]">
          {/* <span className="text-black">Sunday,</span> November 27, 2025 */}
          {format(new Date(), "EEEE MMM dd yyyy")}
        </h3>
      </div>
    </section>
  );
};

export default Header;
