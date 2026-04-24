import React from "react";
import Marquee from "react-fast-marquee";

const BrakingNews = () => {
  const latestNews = [
    {
      id: 1,
      title: "New technology trends shaping 2026",
      category: "Technology",
    },
    {
      id: 2,
      title: "Top football teams prepare for finals",
      category: "Sports",
    },
    {
      id: 3,
      title: "Health experts share new wellness tips",
      category: "Health",
    },
  ];
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="p-4 flex flex-row bg-[#F3F3F3] rounded-xl">
        <button className="bg-[#D72050]  text-white py-2.5 px-6 text-xl font-medium rounded mr-2">
          Latest
        </button>
        <Marquee pauseOnHover={true} className="font-semibold text-lg">
          {latestNews.map((news) => (
            <p className="mr-5" key={news.id}>
              {" "}
              {news.title}
            </p>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BrakingNews;
