import './main.css'

import blogs from "./data/blogs.json";
import sidebar from "./data/sidebar.json";
import Image from "next/image";
import Link from 'next/link';
export default function page(params) {
  
    
return <>




  <Blog/>



</>

};
 function BlogCard({ item }) {
  return (
    <article className="card h-100 shadow-sm">
      <div style={{ position: "relative", width: "100%", height: 180 }}>
        {/* Using next/image is optional — you can use <img/> */}
        <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover", borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>
        <p className="text-muted small mb-2">
          <i className="bi bi-person"></i> {item.author} &nbsp; • &nbsp;
          <i className="bi bi-calendar"></i> {item.date} &nbsp; • &nbsp;
          <i className="bi bi-chat"></i> {item.comments} Comments
        </p>
        <p className="card-text flex-grow-1">{item.excerpt}</p>
        <div className="mt-3">
          <a className="btn btn-primary" href={`/blog/blog-details`}>Read More</a>
        </div>
      </div>
    </article>
  );
} 

  function Blog() {
  return (
    <>
     
      <main className="container py-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active">Blog</li>
          </ol>
        </nav>

        <h2 className="fw-bold mb-4">Blog</h2>

        <div className="row">
          <div className="col-lg-8">
            <div className="row g-4">
              {blogs.map((b) => (
                <div className="col-md-6" key={b.id}>
                 
                  <BlogCard item={b} />
                </div>
              ))}
            </div>

            {/* Pagination (static sample) */}
            <nav className="mt-4">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled"><a className="page-link">‹</a></li>
                <li className="page-item"><a className="page-link">1</a></li>
                <li className="page-item active"><a className="page-link">2</a></li>
                <li className="page-item"><a className="page-link">3</a></li>
                <li className="page-item"><a className="page-link">…</a></li>
                <li className="page-item"><a className="page-link">10</a></li>
                <li className="page-item"><a className="page-link">›</a></li>
              </ul>
            </nav>
          </div>

          <aside className="col-lg-4">
            {/* Search */}
            <div className="mb-4 p-3 border rounded sidebar-box">
              <h6 className="fw-bold border-start border-3 ps-2 border-primary sidebar-title">Search</h6>
              <input type="text" className="form-control mt-2" placeholder="Search..." />
            </div>

            {/* Recent Posts */}
            <div className="mb-4 p-3 border rounded sidebar-box">
              <h6 className="fw-bold border-start border-3 ps-2 border-primary sidebar-title">Recent Posts</h6>
              <ul className="list-unstyled mt-2">
                {sidebar.recentPosts.map((r) => (
                  <li key={r.id} className="d-flex align-items-center gap-2 py-2">
                    <img src={r.thumb} alt={r.title} width={60} height={50} style={{ objectFit: "cover", borderRadius: 4 }} />
                    <div>
                      <div className="small fw-bold">{r.title}</div>
                      <div className="small text-muted">{r.date}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="mb-4 p-3 border rounded sidebar-box">
              <h6 className="fw-bold border-start border-3 ps-2 border-primary sidebar-title">Categories</h6>
              <ul className="mt-2">
                {sidebar.categories.map((c) => (
                  <li key={c.name}>{c.name} <span className="text-muted">({c.count})</span></li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="p-3 border rounded sidebar-box">
              <h6 className="fw-bold border-start border-3 ps-2 border-primary sidebar-title">Tags</h6>
              <div className="d-flex flex-wrap gap-2 mt-2">
                {sidebar.tags.map((t) => (
                  <span key={t} className="badge bg-light text-dark border">{t}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <section className="bg-light py-5 text-center">
        <div className="container">
          <h4 className="fw-bold">Join Our Newsletter</h4>
          <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
          <div className="d-flex justify-content-center">
            <input type="email" placeholder="Enter email" className="form-control w-50 me-2" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>

   
    </>
  );
}

