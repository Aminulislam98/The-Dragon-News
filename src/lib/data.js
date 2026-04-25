export const getCategories = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`,
  );
  const data = await response.json();
  return data;
};
export const getCategoriesNews = async (category_id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await response.json();
  return data.data;
};
export const getNewsDetailed = async (newsDetailedId) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/${newsDetailedId}`,
  );
  const data = await response.json();
  return data.data[0];
};
