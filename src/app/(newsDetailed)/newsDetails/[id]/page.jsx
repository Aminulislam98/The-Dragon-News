import HomeRightSide from "@/components/shared/HomeRightSide";
import { getNewsDetailed } from "@/lib/data";
import ScrollToTop from "@/lib/ScrollToTop";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaArrowLeft, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailed(id);
  return {
    title: news.title,
    description: news.details,
  };
};
// export const metadata = {
//   title: "News Details | The Dragon News",
//   description: "The news portal in Bangladesh",
// };

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const news = await getNewsDetailed(id);
  const {
    details,
    image_url,
    thumbnail_url,
    title,
    total_view,
    author,
    rating,
    _id,
  } = news;
  return (
    <div className="w-full">
      <ScrollToTop news={news.id}></ScrollToTop>
      {/* Container */}
      <div className="flex max-w-7xl w-full mx-auto flex-row">
        <div className="w-10/12 mx-auto px-4">
          {/* Section title */}

          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Dragon News
          </h2>

          {/* Card */}

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            {/* Image */}

            <div className="w-full mb-6">
              <Image
                width={420}
                height={420}
                src={image_url}
                alt="news"
                priority
                className="w-full h-105 object-cover rounded-lg"
              />
            </div>

            {/* Title */}

            <h1 className="text-3xl font-bold text-gray-800 leading-snug mb-4">
              {title}
            </h1>

            {/* Meta / Description (long text) */}

            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              {details}
            </p>

            {/* Back button */}
            <Link href={`/category/${news.category_id}`}>
              <button className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md text-sm font-medium transition">
                <FaArrowLeft />
                All news in this category
              </button>
            </Link>
          </div>
        </div>
        {/* socials */}
        <div className=" w-2/12">
          <div className="max-w-full w-full">
            <h1 className="font-semibold text-xl mb-5">Login With</h1>
            <div className="flex flex-col gap-2 mb-5">
              <Link
                href={"#"}
                className="font-medium text-blue-500 py-1 flex justify-center items-center max-w-full text-sm w-full border rounded gap-1 hover:cursor-pointer"
              >
                <FaGoogle />
                Login with Google
              </Link>
              <Link
                href={"#"}
                className="font-medium text-black-500 py-1 flex justify-center items-center max-w-full text-sm w-full border rounded gap-1 hover:cursor-pointer"
              >
                <FaGithub />
                Login with GitHub
              </Link>
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
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
