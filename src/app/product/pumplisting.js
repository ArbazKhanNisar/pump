"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { API_ENDPOINTS,relatedProducts } from "@/constants/config";
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

export default function PumpClient({ Ptypes, Itypes }) {
  const [pumps, setPumps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [type, setType] = useState("All");
  const [model, setModel] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const industryTypes = useMemo(
    () => ["All", ...uniqueValues(Itypes, "name")],
    [Itypes]
  );
  const models = useMemo(
    () => ["All", ...uniqueValues(Ptypes, "name")],
    [Ptypes]
  );

  // ✅ Get matching IDs by name
  const getIndustryIdByName = (name) => Itypes.find((i) => i.name === name)?.id;
  const getProductIdByName = (name) => Ptypes.find((p) => p.name === name)?.id;

  // ✅ Debounce search input (500ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // ✅ Fetch pumps whenever filters or debounced search change
  useEffect(() => {
    async function fetchPumps() {
      setLoading(true);
      try {
        const params = new URLSearchParams();

        if (debouncedSearch) params.append("title", debouncedSearch);
        if (type !== "All") {
          const typeId = getIndustryIdByName(type);
          if (typeId) params.append("industry_type_id", typeId);
        }
        if (model !== "All") {
          const modelId = getProductIdByName(model);
          if (modelId) params.append("product_type_id", modelId);
        }

        const url = `${API_ENDPOINTS.PRODUCT_List(params)}`;
        ("API URL:", url);

        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch pumps");
        const data = await res.json();

        setPumps(data?.data || []);
        setCurrentPage(data?.current_page || 1);
        setTotalPages(data?.last_page || 1);
      } catch (err) {
        console.error("Error fetching pumps:", err);
        setPumps([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPumps();
  }, [debouncedSearch, type, model]);



  useEffect(() => {
    async function fetchPumps() {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        params.append("page", currentPage);
        if (debouncedSearch) params.append("title", debouncedSearch);
        if (type !== "All") {
          const typeId = getIndustryIdByName(type);
          if (typeId) params.append("industry_type_id", typeId);
        }
        if (model !== "All") {
          const modelId = getProductIdByName(model);
          if (modelId) params.append("product_type_id", modelId);
        }

        const url = `${API_ENDPOINTS.PRODUCT_List(params)}`;
        ("API URL:", url);

        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch pumps");
        const data = await res.json();

        setPumps(data?.data || []);
      } catch (err) {
        console.error("Error fetching pumps:", err);
        setPumps([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPumps();
  }, [currentPage]);

  const resetFilters = () => {
    setSearch("");
    ``;
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
            <h3>Search</h3>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search "
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            
            </div>
          </div>

          <div className="widget">
            <h3>Filter</h3>

            <label className="label">Industry Types</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              {industryTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <label className="label">Product Types</label>
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
          {loading ? (
            <div className="loading">Loading pumps...</div>
          ) : (
            <>
              <div className="pump-grid">
                {pumps.length === 0 && (
                  <div className="no-results">
                    No pumps found matching your criteria.
                  </div>
                )}

                {pumps.map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/product-detail/${p.id}`}
                   
                    passHref
                  >
                    <article className="pump-card">
                      <div className="card-media">
                        <img
                          loading="lazy"
                          src={p.image}
                          alt={p.title}
                          onError={(e) => {
                            e.currentTarget.src =
                              "/assets/img/blog/blog-post-3.webp";
                          }}
                        />
                      </div>

                      <div className="card-body">
                        <h4 className="pump-title">{p.title}</h4>
                        <div className="meta-row">
                          <span>Type: {p.type}</span>
                          <span className="divider">|</span>
                          <span>{p.power || p.drive}</span>
                        </div>
                        <div className="card-footer">
                          <div className="status rent">{p.model}</div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {totalPages > 1 && (
  <div className="pagination">
    <button
      className="nav-btn"
      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
      disabled={currentPage === 1}
    >
      ‹ Prev
    </button>

    {Array.from({ length: totalPages }, (_, i) => i + 1)
      .filter(
        (page) =>
          page === 1 ||
          page === totalPages ||
          (page >= currentPage - 1 && page <= currentPage + 1)
      )
      .map((page, index, array) => {
        const prev = array[index - 1];
        const showDots = prev && page - prev > 1;

        return (
          <React.Fragment key={page}>
            {showDots && <span className="dots">...</span>}
            <button
              className={`page-btn ${currentPage === page ? "active" : ""}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </React.Fragment>
        );
      })}

    <button
      className="nav-btn"
      onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
      disabled={currentPage === totalPages}
    >
      Next ›
    </button>
  </div>
)}
            </>
          )}
        </section>
      </div>
    </main>
  );
}
