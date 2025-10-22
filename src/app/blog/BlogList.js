// app/blog/BlogList.jsx
"use client";

"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import "./main.css";

export default function BlogList({ blogs, categories }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 🔍 Filtered Blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      const matchesSearch =
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.sub_title?.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        b.category?.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [blogs, search, selectedCategory]);

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
        {/* Left Section (Blog List) */}
        <div className="col-lg-8">
          <div className="row g-4">
            {filteredBlogs.length === 0 ? (
              <p>No blogs found.</p>
            ) : (
              filteredBlogs.map((b) => (
                <div className="col-md-6" key={b.id}>
                  <BlogCard item={b} />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Section (Sidebar) */}
        <aside className="col-lg-4">
          {/* 🔍 Search Box */}
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
                  onClick={() => setSelectedCategory(c.name)}
                  className={`mb-2 ${
                    selectedCategory === c.name ? "fw-bold text-primary" : ""
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
          <Link className="btn btn-primary" href={`/blog/${item.id}`}>
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}

