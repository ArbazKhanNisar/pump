import BlogList from "./BlogList"; // 👇 client component
import { API_ENDPOINTS ,IMAGE_DOMAINS} from "@/constants/config";
import { getPagesMetaData } from "@/lib/api";
import { cleanData} from "@/constants/config";
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
  const pages = await getPagesMetaData('blog');
  const blogsData = await blogsRes.json();
  const categoriesData = await categoriesRes.json();
  const blog= cleanData(pages?.page_sections?.[0]?.content) ;
  return <>
   <div
        className="container-fluid page-header py-5 mb-5 text-center text-white"
        style={{ background: `linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .65)),url('${IMAGE_DOMAINS(blog.banner_image)}') center/cover no-repeat` }}
         data-aos="fade-in"
        data-aos-delay="100"
      >
        <div className="container py-5">
          <h1
            className="display-4 text-white mb-4"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Blogs
          </h1>
          <nav
            aria-label="breadcrumb"
            className="d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Blogs
              </li>
            </ol>
          </nav>
        </div>
      </div>
  <BlogList blogs={blogsData.data} categories={categoriesData.data} />;
  </>
}




