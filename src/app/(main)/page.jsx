import { redirect } from "next/navigation";
export const metadata = {
  title: "Home | The Dragon News",
  description: "The news portal in Bangladesh",
};

const default_category_id = "01";
export default async function Home() {
  redirect(`/category/${default_category_id}`);
}
