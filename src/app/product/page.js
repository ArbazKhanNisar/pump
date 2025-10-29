
import "./carListing.css";
import PumpClient from './pumplisting.js';
import { API_ENDPOINTS } from "@/constants/config";
import { getPagesMetaData,getPumps,getProductTypes,getIndustryTypes } from "@/lib/api";

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
  const [pumps, PtypesData,ItypesData,] = await Promise.all([getPumps(), getProductTypes(),getIndustryTypes()]);

  console.log(PtypesData,ItypesData);
  return (
    <section className="px-6 py-8">
      <PumpClient pumps={pumps} Ptypes={PtypesData} Itypes={ItypesData} />
    </section>
  );
}


// Client-side filtering + pagination component
