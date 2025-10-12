
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

export default async function PumpListing() {
  const pumps = await getPumps();

  // Extract filters
  const types = ["All", ...new Set(pumps.map((p) => p.type).filter(Boolean))];
  const models = ["All", ...new Set(pumps.map((p) => p.model).filter(Boolean))];

  // We'll filter + paginate in client
  return (
    <section className="px-6 py-8">
      
      
      <PumpClient pumps={pumps} types={types} models={models} />
    </section>
  );
}

// Client-side filtering + pagination component
