"use client";
import DOMPurify from "isomorphic-dompurify";
import './blog.css';
import Link from "next/link";
export default function BlogDetails({blog}) {
  const cleanDescription = DOMPurify.sanitize(blog?.description || "");

  return (
    <main className="main">
    {/* 🧭 Page Header */}
    <div className="page-title  py-4" data-aos="fade">
      <div className="container">
        <nav className="breadcrumbs mb-3">
          <ol className="breadcrumb justify-content-left">
            <li className="breadcrumb-item">
              <Link href="/" className="text-decoration-none text-primary fw-medium">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active fw-semibold">Blog Details</li>
          </ol>
        </nav>
  
        <h1 className="fw-bold text-dark mb-0" style={{ fontSize: "2.2rem" }}>
          {blog?.title}
        </h1>
      </div>
    </div>
  
    {/* 📰 Blog Details Section */}
    <div className="container">
      <section id="blog-details" className="blog-details section py-5">
        <article className="article">
          {/* 🖼️ Hero Image with Overlay */}
          <div
  className="hero-img position-relative overflow-hidden rounded-4 shadow-lg mb-5"
  data-aos="zoom-in"
  style={{
    maxHeight: "520px",
    borderRadius: "1rem",
  }}
>
  {/* 🖼️ Blog Image */}
  <img
    src={blog?.image}
    alt={blog?.title}
   
     sizes="(max-width: 768px) 100vw, 50vw"
    className="w-100 h-100 object-fit-cover"
    style={{
      objectPosition: "center",
      transition: "transform 0.8s ease",
      filter: "brightness(0.9)",
    }}
    loading="lazy"
   
  />

  {/* 🌈 Gradient Overlay */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.85))",
      zIndex: 1,
    }}
  ></div>

  {/* 💎 Glassmorphism Overlay */}
  <div
    className="position-absolute bottom-0 start-0 end-0 m-4 p-4 rounded-3"
    style={{
      zIndex: 2,
      backdropFilter: "blur(10px)",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255,255,255,0.25)",
      color: "white",
      boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
    }}
  >
    <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
      {/* 📂 Category + Date */}
      <div className="d-flex align-items-center gap-2">
        <span
          className="badge px-3 py-2 fw-semibold"
          style={{
            background: "linear-gradient(135deg, #0d6efd, #6610f2)",
            fontSize: "0.8rem",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            borderRadius: "50px",
          }}
        >
          {blog?.blog_category_name}
        </span>

        <span
          className="text-light d-flex align-items-center"
          style={{ fontSize: "0.9rem", opacity: 0.85 }}
        >
          <i className="bi bi-calendar3 me-1"></i>
          {blog?.created_at}
        </span>
      </div>
    </div>

  </div>
</div>

  
          {/* 📝 Blog Content */}
          <div
            className="article-content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {blog?.sub_title && (
              <h2
                className="fw-semibold mb-4"
                style={{
                  fontSize: "1.5rem",
                  color: "#222",
                  letterSpacing: "-0.3px",
                }}
              >
                {blog?.sub_title}
              </h2>
            )}
  
            <div
              className="content fs-6 text-secondary lh-lg"
              dangerouslySetInnerHTML={{ __html: cleanDescription }}
            />
  
         
          </div>
        </article>
      </section>
    </div>
  </main>
  );
  }
  