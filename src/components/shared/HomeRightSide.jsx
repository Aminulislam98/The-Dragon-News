"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import userAvatar from "@/assets/user.png";

const HomeRightSide = () => {
  const [image, setImage] = useState(null);
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGitHubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };
  useEffect(() => {
    const getSession = async () => {
      const session = await authClient.getSession();
      console.log(session?.data?.user?.image);
      setImage(session?.data?.user?.image);
    };
    getSession();
  }, []);

  return (
    <div className="max-w-full w-full">
      <Image
        width={50}
        height={50}
        alt="ProfilePhoto"
        src={image ? image : userAvatar}
        className="rounded-full"
      ></Image>
      <h1 className="font-semibold text-xl mb-5">Login With</h1>
      <div className="flex flex-col gap-2 mb-5">
        <button
          //   href={"#"}
          onClick={handleGoogleSignin}
          className="font-medium text-blue-500 py-1 flex justify-center items-center max-w-full text-sm w-full border rounded gap-1 hover:cursor-pointer"
        >
          <FaGoogle />
          Login with Google
        </button>
        <button
          onClick={handleGitHubSignin}
          className="font-medium text-black-500 py-1 flex justify-center items-center max-w-full text-sm w-full border rounded gap-1 hover:cursor-pointer"
        >
          <FaGithub />
          Login with GitHub
        </button>
      </div>
      <div>
        <h1 className="font-semibold text-xl mb-5">Find Us On</h1>
        <div className="border border-gray-200 rounded">
          <button className="max-w-full w-full p-4 font-medium text-base border-b border-b-gray-200 flex flex-row justify-start items-center gap-2 cursor-pointer hover:bg-gray-100">
            <FaFacebook className="text-xl" />
            Facebook
          </button>
          <button className="max-w-full w-full p-4 font-medium text-base border-b border-b-gray-200 flex flex-row justify-start items-center gap-2 cursor-pointer hover:bg-gray-100">
            <AiFillTwitterCircle className="text-xl" />
            Twitter
          </button>
          <button className="max-w-full w-full p-4 font-medium text-base  flex flex-row justify-start items-center gap-2 cursor-pointer hover:bg-gray-100">
            <AiFillInstagram className="text-xl" />
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeRightSide;
