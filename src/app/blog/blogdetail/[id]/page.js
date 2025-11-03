
import Footer from '@/Component/footer'
import Nav from '@/Component/navbar'
import BlogDetails from './blogdetail.js'
import { fetchBlogsDetail } from "@/lib/api";


export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const raw = await fetchBlogsDetail(id);
    return {
      title: raw?.meta_title || "Blog Detail - Company Name",
      description:
        raw?.meta_description || "View detailed specifications of our Blog.",
      keywords:
        raw?.meta_keywords || "pumps, industrial, product, details, specifications",
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Product Detail",
      description: "View detailed product information.",
    };
  }
}



export default async function page({params}) {
  const { id } = await params;
  console.log(id);
  const blogdata = await fetchBlogsDetail(id);
    
return <>




  <BlogDetails blog={blogdata}/>

 

</>

};







 

