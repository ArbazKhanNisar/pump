
import Footer from '@/Component/footer'
import Nav from '@/Component/navbar'
import BlogDetails from './blogdetail.js'
import { fetchBlogsDetail } from "@/lib/api";
export default async function page({params}) {
  const { id } = await params;
  console.log(id);
  const blogdata = await fetchBlogsDetail(id);
    
return <>




  <BlogDetails blog={blogdata}/>

 

</>

};







 

