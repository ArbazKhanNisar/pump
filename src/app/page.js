
import { getPagesMetaData } from "@/lib/api";
import HomeClient from "./HomeClient"; // 👇 Client component
import { API_ENDPOINTS ,cleanData} from "@/constants/config";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const pages = await getPagesMetaData('home');
  const home = pages || {};

  return {
    title: home.meta_title || "Home - Company Name",
    description: home.meta_description || "Welcome to our company website.",
    keywords: home.meta_keywords || "home, company, services, features",
  };
}

export default async function HomePage() {
  try {
    // Fetch all page data
    const res = await fetch(API_ENDPOINTS.PAGES, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch pages data");

    const json = await res.json();
    const data =  cleanData(json);
    const pages = data?.data || {};

    // Extract each page section from the response
    const home = pages?.home?.page_sections?.[0]?.content || {};
    const about = pages?.about?.page_sections?.[0]?.content || {};
    const features = pages?.feature?.page_sections?.[0]?.content || {};
    const services = pages?.services?.page_sections?.[0]?.content || {};
    const testimonial = pages?.testimonial?.page_sections?.[0]?.content || {};

    return (
      <HomeClient
        home={home}
        about={about}
        features={features}
        services={services}
        testimonial={testimonial}
      />
    );
  } catch (error) {
    console.error("Error loading pages:", error);
    return (
      <div className="text-center py-5">
        <h2 className="text-danger">Failed to load page content.</h2>
      </div>
    );
  }
}