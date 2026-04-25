"use client";

import Image from "next/image";
import Link from "next/link";
// Import icons from react-icons only (as requested)

import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
const NewsCard = ({ news }) => {
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
  console.log(news);
  return (
    // Main container (full width)

    <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
      {/* Top section: Author + icons */}

      <div className="flex items-center justify-between  bg-[#F3F3F3] py-3 px-5 ">
        {/* Author info */}

        <div className="flex items-center gap-3">
          {/* Avatar */}

          <Image
            width={40}
            height={40}
            src={author.img}
            alt={`Author:${author.name}`}
            className="w-10 h-10 rounded-full object-cover"
          />

          {/* Name + date */}

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              {author.name ? author.name : " No name given"}
            </h3>

            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
        </div>

        {/* Right side icons */}

        <div className="flex items-center gap-4 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer" />

          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>
      <div className="p-4">
        {/* Title */}

        <h2 className="text-xl font-bold text-gray-800 leading-snug mb-4">
          {title}
        </h2>

        {/* Image */}

        <div className="w-full mb-4">
          <Link href={thumbnail_url}>
            <Image
              width={250}
              height={250}
              src={image_url}
              alt={title}
              className="w-full h-62.5 object-cover rounded-lg"
            />
          </Link>
        </div>

        {/* Description */}

        <p className="text-sm text-gray-500 mb-3 leading-relaxed line-clamp-3">
          {details}
        </p>

        {/* Read more */}
        <Link href={`/newsDetails/${_id}`}>
          <button className=" btn text-orange-500 text-sm font-semibold cursor-pointer mb-4">
            Read More
          </button>
        </Link>

        {/* Bottom section */}

        <div className="flex items-center justify-between border-t pt-3">
          {/* Rating */}

          <div className="flex items-center gap-2">
            {/* Stars */}

            <div className="flex text-orange-400">
              <FaStar />

              <FaStar />

              <FaStar />

              <FaStar />

              <FaStar />
            </div>

            {/* Rating number */}

            <span className="text-sm text-gray-600">{rating.number}</span>
          </div>

          {/* Views */}

          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />

            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
