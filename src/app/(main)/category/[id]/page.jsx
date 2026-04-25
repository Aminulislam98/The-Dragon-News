import Categories from "@/components/homePage/Categories";
import NewsCard from "@/components/homePage/NewsCard";
import CategoriesLink from "@/components/shared/CategoriesLink";
import { getCategories, getCategoriesNews } from "@/lib/data";
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
    </section>
  );
};

export default CategoryNewsPage;
