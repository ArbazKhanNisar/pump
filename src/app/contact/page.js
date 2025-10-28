
import { getPagesMetaData } from "@/lib/api";
import Contactsection from './contact.js';
export async function generateMetadata() {
  const pages = await getPagesMetaData('contact');
  const home = pages || {};

  return {
    title: home.meta_title || "Home - Company Name",
    description: home.meta_description || "Welcome to our company website.",
    keywords: home.meta_keywords || "home, company, services, features",
  };
}

export default function page(params) {
   return <Contactsection />
};




