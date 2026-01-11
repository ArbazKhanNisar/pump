"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchBlogs } from "@/lib/api";
import "./main.css";

export default function BlogList({ categories }) {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // 🧠 Fetch blogs dynamically
  const handleFetch = async (page) => {
    setLoading(true);
    const data = await fetchBlogs({
      category: selectedCategory,
      title: search,
      page:page||1
    });
    if(page){

    }
    else{
      setCurrentPage(data?.current_page || 1);
      setTotalPages(data?.last_page || 1);
    }
    setBlogs(data?.data||[]);
    setLoading(false);
  };

  // ⏳ Debounced search + category change
  useEffect(() => {
    const delay = setTimeout(() => {
      handleFetch();
    }, 400);
    return () => clearTimeout(delay);
  }, [search, selectedCategory]);

 
  useEffect( () => {
    handleFetch(currentPage);
  }, [currentPage]);


  return (
    <main className="container py-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Blog</li>
        </ol>
      </nav>

      <h2 className="fw-bold mb-4">Blog</h2>

      <div className="row">
        {/* Left Section */}
        <div className="col-lg-8">
          {loading ? (
            <p>Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p>No blogs found.</p>
          ) : (
            <div className="row g-4">
              {blogs.map((b) => (
                <div className="col-md-6" key={b.id}>
                  <BlogCard item={b} />
                </div>
              ))}
            </div>
          )}


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
        </div>

        {/* Right Section (Sidebar) */}
        <aside className="col-lg-4">
          {/* 🔍 Search */}
          <div className="mb-4 p-3 border rounded sidebar-box">
            <h6 className="fw-bold border-start border-3 ps-2 border-primary sidebar-title">
              Search
            </h6>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* 🏷 Categories */}
          <div className="mb-4 p-3 border rounded sidebar-box">
            <h6 className="fw-bold border-start border-3 ps-2 border-primary sidebar-title">
              Categories
            </h6>
            <ul className="mt-2 list-unstyled">
              <li
                onClick={() => setSelectedCategory("All")}
                className={`mb-2 cursor-pointer ${
                  selectedCategory === "All" ? "fw-bold text-primary" : ""
                }`}
                style={{ cursor: "pointer" }}
              >
                All
              </li>
              {categories.map((c) => (
                <li
                  key={c.name}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`mb-2 ${
                    selectedCategory === c.id ? "fw-bold text-primary" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  {c.name}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}

// 🧩 BlogCard Component
function BlogCard({ item }) {
  const [imgSrc, setImgSrc] = useState(item.image);

  return (
    <article className="card h-100 shadow-sm">
      <div style={{ position: "relative", width: "100%", height: 180 }}>
        <Image
        loading="lazy"
          src={imgSrc || "/images/fallback-blog.webp"}
          alt={item.title}
          fill
          onError={() => setImgSrc("/images/fallback-blog.webp")}
          style={{
            objectFit: "cover",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>
        <p className="text-muted small mb-2">
          <i className="bi bi-calendar"></i> {item.created_at}
        </p>
        <p
          className="card-text flex-grow-1"
          dangerouslySetInnerHTML={{ __html: item.sub_title }}
        ></p>
        <div className="mt-3">
          <Link className="btn btn-primary" href={`/blog/blogdetail/${item.id}`}>
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}


