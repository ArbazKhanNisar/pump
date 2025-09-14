"use client";
import Link from "next/link";
import React, { useMemo, useState, useEffect } from "react";
import "./carListing.css";

/**
 * Single-file Car Listing page.
 * - Uses an in-file mock `cars` array (move to JSON if you prefer).
 * - Filters: search, brand, transmission, price range.
 * - Controls: show-per-page, sort.
 * - Responsive grid + simple card with badges.
 */

const MOCK_PUMPS = [
  {
    id: 1,
    year: 2022,
    title: "Grundfos CR 10-6 Multistage Pump",
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    usageHours: "1,200 hrs",
    type: "Electric",
    power: "7.5 kW",
    status: "rent",
    pricePerMonth: 150,
    price: 3200
  },
  {
    id: 2,
    year: 2021,
    title: "KSB Etanorm Pump",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    usageHours: "950 hrs",
    type: "Electric",
    power: "5.5 kW",
    status: "sale",
    price: 2700
  },
  {
    id: 3,
    year: 2020,
    title: "Ebara DWO 150 Electric Pump",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    usageHours: "1,800 hrs",
    type: "Electric",
    power: "1.5 kW",
    status: "rent",
    pricePerMonth: 90,
    price: 1400
  },
  {
    id: 4,
    year: 2023,
    title: "Honda WB30XT Water Pump",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    usageHours: "600 hrs",
    type: "Manual",
    power: "6.5 HP",
    status: "rent",
    pricePerMonth: 120,
    price: 1100
  }
];

function uniqueValues(arr, key) {
  return Array.from(new Set(arr.map((i) => i[key]))).filter(Boolean);
}

export default function PumpListing() {
  // UI state
  const [pumps] = useState(MOCK_PUMPS);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [transmission, setTransmission] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [showOnPage, setShowOnPage] = useState(9);
  const prices = useMemo(() => pumps.map((c) => c.price || c.pricePerMonth || 0), [pumps]);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);




  // Derived lists for dropdowns (brand uses first word of title by default)
  const brands = useMemo(() => {
    return ["All", ...uniqueValues(pumps.map(c => c.title.split(" ")[0].replace(/\W/g, "")) ,'')];
  }, [pumps]);

  useEffect(() => {
    // ensure priceRange bounds updated if pumps change
    setPriceRange([minPrice, maxPrice]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minPrice, maxPrice, pumps.length]);

  // Filtering + sorting
  const filtered = useMemo(() => {
    let result = pumps.filter((c) => {
      // search (title)
      if (search && !c.title.toLowerCase().includes(search.toLowerCase())) return false;
      // brand
      if (brand !== "All" && !c.title.toLowerCase().startsWith(brand.toLowerCase())) return false;
      // transmission
      if (transmission !== "All" && c.transmission !== transmission) return false;
      // price range (use `price` if present, else pricePerMonth for rent items)
      const priceVal = c.price || c.pricePerMonth || 0;
      if (priceVal < priceRange[0] || priceVal > priceRange[1]) return false;
      return true;
    });

    // sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => ( (a.price || a.pricePerMonth || 0) - (b.price || b.pricePerMonth || 0) ));
        break;
      case "price-desc":
        result.sort((a, b) => ( (b.price || b.pricePerMonth || 0) - (a.price || a.pricePerMonth || 0) ));
        break;
      case "newest":
        result.sort((a, b) => b.year - a.year);
        break;
      default:
        break;
    }

    return result;
  }, [pumps, search, brand, transmission, sortBy, priceRange]);

  // pagination (simple slice)
  const visiblePumps = filtered.slice(0, showOnPage);

  // handlers
  const onPriceChange = (e, idx) => {
    const value = Number(e.target.value);
    const [low, high] = priceRange;
    if (idx === 0) setPriceRange([Math.min(value, high), high]);
    else setPriceRange([low, Math.max(value, low)]);
  };

  const resetFilters = () => {
    setSearch("");
    setBrand("All");
    setTransmission("All");
    setSortBy("newest");
    setShowOnPage(9);
    setPriceRange([minPrice, maxPrice]);
  };

  return (
    <>
     
      
      <main className="pump-main">
        <div className="pump-container">
          <aside className="pump-sidebar">
            <div className="widget search">
              <h3>Pump Search</h3>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search pumps..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button aria-label="search">🔍</button>
              </div>
            </div>

            <div className="widget">
              <h3>Pump Filter</h3>

              <label className="label">Brand</label>
              <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>

              <label className="label">Type</label>
              <select value={transmission} onChange={(e) => setTransmission(e.target.value)}>
                <option value="All">All</option>
                <option value="Electric">Electric</option>
                <option value="Manual">Manual</option>
              </select>

              <label className="label">Price: [${priceRange[0]} - ${priceRange[1]}]</label>
              <div className="price-range">
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={priceRange[0]}
                  onChange={(e) => onPriceChange(e, 0)}
                />
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={(e) => onPriceChange(e, 1)}
                />
              </div>

              <button className="btn-reset" onClick={resetFilters}>Reset Filter</button>
            </div>
          </aside>

          <section className="pump-main-content">
            <div className="controls-row">
              <div className="left-controls">
                <label>Show
                  <select value={showOnPage} onChange={(e) => setShowOnPage(Number(e.target.value))}>
                    <option value={6}>6 Pumps</option>
                    <option value={9}>9 Pumps</option>
                    <option value={12}>12 Pumps</option>
                  </select>
                </label>
              </div>

              <div className="right-controls">
                <label>Sort By
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="newest">Newest</option>
                    <option value="price-asc">Price: Lowest First</option>
                    <option value="price-desc">Price: Highest First</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="pump-grid">
              {visiblePumps.length === 0 && <div className="no-results">No pumps found matching your criteria.</div>}

              {visiblePumps.map((p) => (
               <Link href="/product/product-detail" passHref>
<article  key={p.id} className="pump-card">
                  <div className="card-media">
                    <img src={p.image} alt={p.title} />
                    <div className="year-badge">{p.year}</div>
                   
                  </div>

                  <div className="card-body">
                    <h4 className="pump-title">{p.title}</h4>
                    <div className="meta-row">
                      <span>{p.usageHours}</span>
                      <span className="divider">|</span>
                      <span>{p.type}</span>
                      <span className="divider">|</span>
                      <span>{p.power}</span>
                    </div>

                    <div className="card-footer">
                      <div className={`status ${p.status === "rent" ? "rent" : "sale"}`}>
                        {p.status === "rent" ? "For Rent" : "For Sale"}
                      </div>
                      <div className="price">
                        {p.status === "rent"
                          ? <><span className="currency">${p.pricePerMonth}</span><small>/Month</small></>
                          : <span className="currency">${p.price.toLocaleString()}</span>}
                      </div>
                    </div>
                  </div>
                </article>
               </Link>
              
              ))}
            </div>

            <div className="results-info">
              Showing {Math.min(showOnPage, filtered.length)} of {filtered.length} results
            </div>
          </section>
        </div>
      </main>

  
  </>
  );

  // helper to safely compute filtered length outside render (simple closure)
  function filteredLength(mapper) {
    // reuse same logic as `filtered` memo above (quick recompute)
    let result = cars.filter((c) => {
      if (search && !c.title.toLowerCase().includes(search.toLowerCase())) return false;
      if (brand !== "All" && !c.title.toLowerCase().startsWith(brand.toLowerCase())) return false;
      if (transmission !== "All" && c.transmission !== transmission) return false;
      const priceVal = c.price || c.pricePerMonth || 0;
      if (priceVal < priceRange[0] || priceVal > priceRange[1]) return false;
      return true;
    });
    return typeof mapper === "function" ? mapper(result) : result.length;
  }
}
