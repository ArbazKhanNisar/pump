import Features from "@/Component/features";

import { getPagesMetaData } from "@/lib/api";

export async function generateMetadata() {
  const pages = await getPagesMetaData('feature');
  const home = pages || {};

  return {
    title: home.meta_title || "Home - Company Name",
    description: home.meta_description || "Welcome to our company website.",
    keywords: home.meta_keywords || "home, company, services, features",
  };
}

export default async function page() {
  const pages = await getPagesMetaData('feature');
  const features= pages?.page_sections?.[0]?.content || {};
    return  <>
      <div
      className="container-fluid page-header py-5 mb-5 text-center text-white"
      style={{ background: "linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .65)),url('/img/carousel-1.jpg') center/cover no-repeat" }}
      data-aos="fade-in"
      data-aos-delay="100"
    >
      <div className="container py-5">
        <h1
          className="display-4 text-white mb-4"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Features
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
              Features
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <Features features={features} />
    </>
};
