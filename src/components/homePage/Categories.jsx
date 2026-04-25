import Link from "next/link";
import React from "react";

const Categories = ({ categoriesData, activeId }) => {
  console.log(categoriesData, "id");
  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">All categories</h2>
      <ul className="flex flex-col gap-3">
        {categoriesData.map((category) => {
          return (
            <Link
              className={`px-2 py-2  border  border-gray-200 rounded text-black font-semibold cursor-pointer flex justify-center items-center ${activeId === category.category_id && "bg-gray-200"}`}
              href={`/category/${category.category_id}`}
              key={category.category_id}
            >
              {category.category_name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
