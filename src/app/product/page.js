
import "./carListing.css";
import PumpClient from './pumplisting.js';
export const revalidate = 0; // Disable caching to always get fresh data

async function getPumps() {
  const res = await fetch(
    "https://ghostwhite-alligator-811158.hostingersite.com/api/products",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch pumps");
  const data = await res.json();
  return data.data || [];
}

async function getProductTypes() {
  const res = await fetch(
    "https://ghostwhite-alligator-811158.hostingersite.com/api/product-type",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch industry types");
  const data = await res.json();
  return data.data || [];
}


async function getIndustryTypes() {
  const res = await fetch(
    "https://ghostwhite-alligator-811158.hostingersite.com/api/industry-type",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch industry types");
  const data = await res.json();
  return data.data || [];
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
