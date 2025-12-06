
import "./carListing.css";
import PumpClient from './pumplisting.js';
import { API_ENDPOINTS } from "@/constants/config";
import { getPagesMetaData,getPumps,getProductTypes,getIndustryTypes } from "@/lib/api";
export const dynamic = "force-dynamic";
import { IMAGE_DOMAINS } from "@/constants/config";
export async function generateMetadata() {
  const pages = await getPagesMetaData('product');
  const home = pages || {};

  return {
    title: home.meta_title || "Home - Company Name",
    description: home.meta_description || "Welcome to our company website.",
    keywords: home.meta_keywords || "home, company, services, features",
  };
}



export default async function PumpListing() {
  // Fetch both in parallel for speed
  const [pages, PtypesData,ItypesData,] = await Promise.all([getPagesMetaData('product'), getProductTypes(),getIndustryTypes()]);
  const product= pages?.page_sections?.[0]?.content || {};
  (PtypesData,ItypesData);
  return (
    <section className="px-6 py-8">
       <div
      className="container-fluid page-header py-5 mb-5 text-center text-white"
      style={{ background: `linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .65)),url('${IMAGE_DOMAINS(product.banner_image)}') center/cover no-repeat` }}
      data-aos="fade-in"
      data-aos-delay="100"
    >
      <div className="container py-5">
        <h1
          className="display-4 text-white mb-4"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Products
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
              Products
            </li>
          </ol>
        </nav>
      </div>
    </div>
      <PumpClient  Ptypes={PtypesData} Itypes={ItypesData} />
    </section>
  );
}


// Client-side filtering + pagination component
