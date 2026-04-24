import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      {/* 404 Text */}

      <h2 className="text-6xl font-extrabold text-gray-800 mb-4">404</h2>

      {/* Message */}

      <p className="text-lg text-gray-600 text-center max-w-md mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.
        Stay updated with the latest news from around the world.
      </p>

      {/* Buttons */}

      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Go Home
        </Link>

        {/* <Link
          href="/news"
          className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Browse News
        </Link> */}
      </div>
    </div>
  );
};

export default NotFoundPage;
