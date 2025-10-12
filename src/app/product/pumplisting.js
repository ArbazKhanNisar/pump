"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";

function uniqueValues(arr, key) {
  const set = new Set();
  const out = [];
  for (const item of arr || []) {
    const val = typeof key === "function" ? key(item) : item?.[key];
    if (val && !set.has(val)) {
      set.add(val);
      out.push(val);
    }
  }
  return out;
}

export default function PumpClient({ pumps }) {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [type, setType] = useState("All");
  const [model, setModel] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const [showOnPage, setShowOnPage] = useState(9);


  

  // Derived dropdown options
  const brands = useMemo(() => {
    return ["All", ...uniqueValues(pumps, "brand_name")]; // adjust key if available
  }, [pumps]);

  const types = useMemo(() => ["All", ...uniqueValues(pumps, "type")], [pumps]);
  const models = useMemo(() => ["All", ...uniqueValues(pumps, "model")], [pumps]);

  // Filtering logic
  const filtered = useMemo(() => {
    return pumps.filter((c) => {
      if (search && !c.title?.toLowerCase().includes(search.toLowerCase())) return false;
      if (brand !== "All" && c.brand_name !== brand) return false;
      if (type !== "All" && c.type !== type) return false;
      if (model !== "All" && c.model !== model) return false;
      return true;
    });
  }, [pumps, search, brand, type, model]);

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / showOnPage);
  const startIndex = (currentPage - 1) * showOnPage;
  const visiblePumps = filtered.slice(startIndex, startIndex + showOnPage);

  const resetFilters = () => {
    setSearch("");
    setBrand("All");
    setType("All");
    setModel("All");
    setCurrentPage(1);
  };

  return (
    <main className="pump-main">
      <div className="pump-container">
        {/* Sidebar */}
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
            <select value={type} onChange={(e) => setType(e.target.value)}>
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <label className="label">Model</label>
            <select value={model} onChange={(e) => setModel(e.target.value)}>
              {models.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>

            <button className="btn-reset" onClick={resetFilters}>
              Reset Filter
            </button>
          </div>
        </aside>

        {/* Main content */}
        <section className="pump-main-content">
          <div className="controls-row">
            <div className="left-controls">
              <label>
                Show
                <select
                  value={showOnPage}
                  onChange={(e) => {
                    setShowOnPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  <option value={6}>6 Pumps</option>
                  <option value={9}>9 Pumps</option>
                  <option value={12}>12 Pumps</option>
                </select>
              </label>
            </div>
          </div>

          <div className="pump-grid">
            {visiblePumps.length === 0 && (
              <div className="no-results">No pumps found matching your criteria.</div>
            )}

            {visiblePumps.map((p) => (
              <Link key={p.id} href="/product/product-detail" passHref>
                <article className="pump-card">
                  <div className="card-media">
                    <img src={p.image} alt={p.title} 
                    onError={(e) => { e.currentTarget.src = '/assets/img/blog/blog-post-3.webp'; }}
                    />
                  </div>

                  <div className="card-body">
                    <h4 className="pump-title">{p.title}</h4>
                    <div className="meta-row">
                      {/* <span>Model: {p.model}</span>
                      <span className="divider">|</span> */}
                      <span>Type: {p.type}</span>
                      <span className="divider">|</span>
                      <span>{p.power || p.drive}</span>
                    </div>
                    <div className="card-footer ">
                      <div className="status rent">{p.model}</div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Pagination buttons */}
          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}

          <div className="results-info">
            Showing {visiblePumps.length} of {filtered.length} results
          </div>
        </section>
      </div>
    </main>
  );
}


