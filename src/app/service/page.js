import Services from "@/Component/service";
import { cleanData} from "@/constants/config";
import { getPagesMetaData } from "@/lib/api";
import { IMAGE_DOMAINS } from "@/constants/config";
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const pages = await getPagesMetaData('services');
  const home = pages || {};

  return {
    title: home.meta_title || "Home - Company Name",
    description: home.meta_description || "Welcome to our company website.",
    keywords: home.meta_keywords || "home, company, services, features",
  };
}



export default async function page() {
  const pages = await getPagesMetaData('services');
  const services= cleanData(pages?.page_sections?.[0]?.content) ;
    return<>
    <div
      className="container-fluid page-header py-5 mb-5 text-center text-white"
      style={{ background: `linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .65)),url('${IMAGE_DOMAINS(services.banner_image)}') center/cover no-repeat` }}
       data-aos="fade-in"
      data-aos-delay="100"
    >
      <div className="container py-5">
        <h1
          className="display-4 text-white mb-4"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Services
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
              Services
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <Services services={services}/>
    </>
};
