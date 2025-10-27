import BlogList from "./BlogList"; // 👇 client component
import { API_ENDPOINTS } from "@/constants/config";
import { getPagesMetaData } from "@/lib/api";

export async function generateMetadata() {
  const pages = await getPagesMetaData('blog');
  const home = pages || {};

  return {
    title: home.meta_title || "Home - Company Name",
    description: home.meta_description || "Welcome to our company website.",
    keywords: home.meta_keywords || "home, company, services, features",
  };
}
export default async function Page() {


  const [blogsRes, categoriesRes] = await Promise.all([
    fetch(API_ENDPOINTS.BLOG_LIST, { cache: "no-store" }),
    fetch(API_ENDPOINTS.BLOG_CATEGORY, { cache: "no-store" }),
  ]);
  
  const blogsData = await blogsRes.json();
  const categoriesData = await categoriesRes.json();
  
  return <BlogList blogs={blogsData.data} categories={categoriesData.data} />;
}




