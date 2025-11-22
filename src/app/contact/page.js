
import { getPagesMetaData } from "@/lib/api";
import Contactsection from './contact.js';
import { IMAGE_DOMAINS } from "@/constants/config.js";
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const pages = await getPagesMetaData('contact');
  const home = pages || {};

  return {
    title: home.meta_title || "Home - Company Name",
    description: home.meta_description || "Welcome to our company website.",
    keywords: home.meta_keywords || "home, company, services, features",
  };
}

export default async function page(params) {
  const pages = await getPagesMetaData('contact');
  const contact= pages?.page_sections?.[0]?.content || {};
  (contact);
   return <Contactsection url={IMAGE_DOMAINS(contact.banner_image)} />
};




