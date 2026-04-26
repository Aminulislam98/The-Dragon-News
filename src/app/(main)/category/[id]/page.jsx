import Categories from "@/components/homePage/Categories";
import NewsCard from "@/components/homePage/NewsCard";
import CategoriesLink from "@/components/shared/CategoriesLink";
import HomeRightSide from "@/components/shared/HomeRightSide";
import { authClient } from "@/lib/auth-client";
import { getCategories, getCategoriesNews } from "@/lib/data";
import ScrollToTop from "@/lib/ScrollToTop";
import Link from "next/link";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const index = Number(id) - 1;
  const dataAllCategory = await getCategories();
  const categoryList = dataAllCategory?.data?.news_category;
  const currentCategory = categoryList ? categoryList[index] : null;
  return {
    title: `${currentCategory?.category_name} | The Dragon News`,
    // description: news.details,
  };
};

const CategoryNewsPage = async ({ params }) => {
  const { id } = await params;
  const dataAllCategory = await getCategories();
  const categoriesData = dataAllCategory?.data?.news_category;

  const newsByCategory = await getCategoriesNews(id);

  return (
    <section className="max-w-full w-full">
      <ScrollToTop news={id}></ScrollToTop>
      <div className="grid grid-cols-12 max-w-7xl w-full mx-auto gap-4">
        {/* all categories */}
        <div className="col-span-3">
          <Categories
            categoriesData={categoriesData}
            activeId={id}
          ></Categories>
        </div>
        {/* news */}
        <div className="col-span-6 ">
          <div className="flex flex-col gap-4">
            {newsByCategory.length > 0 ? (
              newsByCategory.map((news) => (
                <NewsCard
                  className="py-4 bg-purple-100"
                  key={news._id}
                  news={news}
                ></NewsCard>
              ))
            ) : (
              <div className="max-w-4xl mx-auto p-4">
                <div className=" rounded-lg p-6 text-center">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    No news found in this category
                  </h2>
                  <p className="text-gray-500">
                    Please select a different category. Thank you.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* socials */}
        <div className="col-span-3 ">
          <HomeRightSide></HomeRightSide>
        </div>
      </div>
    </section>
  );
};

export default CategoryNewsPage;
