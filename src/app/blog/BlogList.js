"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchBlogs } from "@/lib/api";
import "./main.css";

export default function BlogList({ categories }) {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // 🧠 Fetch blogs dynamically
  const handleFetch = async () => {
    setLoading(true);
    const data = await fetchBlogs({
      category: selectedCategory,
      title: search,
    });
    setBlogs(data);
    setLoading(false);
  };

  // ⏳ Debounced search + category change
  useEffect(() => {
    const delay = setTimeout(() => {
      handleFetch();
    }, 400);
    return () => clearTimeout(delay);
  }, [search, selectedCategory]);

 

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


