// import './main.css'

// import blogs from "./data/blogs.json";
// import sidebar from "./data/sidebar.json";
// import Image from "next/image";
// import Link from 'next/link';
// export default function page(params) {
  
    
// return <>




//   <Blog/>



// </>

// };
 

// function BlogCard({ item }) {
//   return (
//     <article className="card h-100 shadow-sm">
//       <div style={{ position: "relative", width: "100%", height: 180 }}>
//         {/* Using next/image is optional — you can use <img/> */}
//         <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover", borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
//       </div>

//       <div className="card-body d-flex flex-column">
//         <h5 className="card-title">{item.title}</h5>
//         <p className="text-muted small mb-2">
//           <i className="bi bi-person"></i> {item.author} &nbsp; • &nbsp;
//           <i className="bi bi-calendar"></i> {item.date} &nbsp; • &nbsp;
//           <i className="bi bi-chat"></i> {item.comments} Comments
//         </p>
//         <p className="card-text flex-grow-1">{item.excerpt}</p>
//         <div className="mt-3">
          
//           <Link className="btn btn-primary" href={`/blog/blog-details`}>Read More
          
//           </Link>
         
//         </div>
//       </div>
//     </article>
//   );
// } 

//   function Blog() {
//   return (
//     <>
     
//       <main className="container py-5">
//         <nav aria-label="breadcrumb">
//           <ol className="breadcrumb">
//             <li className="breadcrumb-item"><Link href="/">Home</Link></li>
//             <li className="breadcrumb-item active">Blog</li>
//           </ol>
//         </nav>

//         <h2 className="fw-bold mb-4">Blog</h2>

//         <div className="row">
//           <div className="col-lg-8">
//             <div className="row g-4">
//               {blogs.map((b) => (
//                 <div className="col-md-6" key={b.id}>
                 
//                   <BlogCard item={b} />
//                 </div>
//               ))}
//             </div>

//             {/* Pagination (static sample) */}
//             <nav className="mt-4">
//               <ul className="pagination justify-content-center">
//                 <li className="page-item disabled"><Link href={""} className="page-link">‹</Link></li>
//                 <li className="page-item"><Link href={""} className="page-link">1</Link></li>
//                 <li className="page-item active"><Link href={""} className="page-link">2</Link></li>
//                 <li className="page-item"><Link href={""} className="page-link">3</Link></li>
//                 <li className="page-item"><Link href={""} className="page-link">…</Link></li>
//                 <li className="page-item"><Link href={""} className="page-link">10</Link></li>
//                 <li className="page-item"><Link href={""} className="page-link">›</Link></li>
//               </ul>
//             </nav>
//           </div>

//           <aside className="col-lg-4">
//             {/* Search */}
//             <div className="mb-4 p-3 border rounded sidebar-box">
//               <h6 className="fw-bold border-start border-3 ps-2 border-primary sidebar-title">Search</h6>
//               <input type="text" className="form-control mt-2" placeholder="Search..." />
//             </div>

          

//             {/* Categories */}
//             <div className="mb-4 p-3 border rounded sidebar-box">
//               <h6 className="fw-bold border-start border-3 ps-2 border-primary sidebar-title">Categories</h6>
//               <ul className="mt-2">
//                 {sidebar.categories.map((c) => (
//                   <li key={c.name}>{c.name} <span className="text-muted">({c.count})</span></li>
//                 ))}
//               </ul>
//             </div>

           
//           </aside>
//         </div>
//       </main>

      

   
//     </>
//   );
// }




// app/blog/page.js
import BlogList from "./BlogList"; // 👇 client component
import { API_ENDPOINTS } from "@/constants/config";
export default async function Page() {


  const [blogsRes, categoriesRes] = await Promise.all([
    fetch(API_ENDPOINTS.BLOG_LIST, { cache: "no-store" }),
    fetch(API_ENDPOINTS.BLOG_CATEGORY, { cache: "no-store" }),
  ]);
  
  const blogsData = await blogsRes.json();
  const categoriesData = await categoriesRes.json();
  
  return <BlogList blogs={blogsData.data} categories={categoriesData.data} />;
}



// import './main.css';
// import Image from 'next/image';
// import Link from 'next/link';

// export default async function Page() {
//   // ✅ Fetch blog data from your API
//   const res = await fetch(
//     'https://ghostwhite-alligator-811158.hostingersite.com/api//blogs',
//     { cache: 'no-store' } // ensures fresh data every time
//   );

//   if (!res.ok) {
//     throw new Error('Failed to fetch blogs');
//   }

//   const json = await res.json();
//   const blogs = json.data || [];

//   return (
//     <>
//       <main className="container py-5">
//         <nav aria-label="breadcrumb">
//           <ol className="breadcrumb">
//             <li className="breadcrumb-item"><Link href="/">Home</Link></li>
//             <li className="breadcrumb-item active">Blog</li>
//           </ol>
//         </nav>

//         <h2 className="fw-bold mb-4">Blog</h2>

//         <div className="row">
//           <div className="col-lg-8">
//             <div className="row g-4">
//               {blogs.length === 0 ? (
//                 <p>No blogs found.</p>
//               ) : (
//                 blogs.map((b) => (
//                   <div className="col-md-6" key={b.id}>
//                     <BlogCard item={b} />
//                   </div>
//                 ))
//               )}
//             </div>

//             {/* Pagination (static example) */}
//             <nav className="mt-4">
//               <ul className="pagination justify-content-center">
//                 <li className="page-item disabled">
//                   <Link href="#" className="page-link">‹</Link>
//                 </li>
//                 <li className="page-item active">
//                   <Link href="#" className="page-link">1</Link>
//                 </li>
//                 <li className="page-item">
//                   <Link href="#" className="page-link">2</Link>
//                 </li>
//                 <li className="page-item">
//                   <Link href="#" className="page-link">›</Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>

//           {/* Sidebar (optional static) */}
//           <aside className="col-lg-4">
//             <div className="mb-4 p-3 border rounded sidebar-box">
//               <h6 className="fw-bold border-start border-3 ps-2 border-primary sidebar-title">
//                 Search
//               </h6>
//               <input type="text" className="form-control mt-2" placeholder="Search..." />
//             </div>

//             <div className="mb-4 p-3 border rounded sidebar-box">
//               <h6 className="fw-bold border-start border-3 ps-2 border-primary sidebar-title">
//                 Categories
//               </h6>
//               <ul className="mt-2">
//                 <li>blog categoey 1</li>
//               </ul>
//             </div>
//           </aside>
//         </div>
//       </main>
//     </>
//   );
// }

// function BlogCard({ item }) {
//   return (
//     <article className="card h-100 shadow-sm">
//       <div style={{ position: 'relative', width: '100%', height: 180 }}>
//         <Image
//           src={item.image}
//           alt={item.title}
//           fill
//           onError={() => setImgSrc("/assets/img/blog/blog-post-2.webp")}
//           style={{
//             objectFit: 'cover',
//             borderTopLeftRadius: 8,
//             borderTopRightRadius: 8,
//           }}
//         />
//       </div>

//       <div className="card-body d-flex flex-column">
//         <h5 className="card-title">{item.title}</h5>
//         <p className="text-muted small mb-2">
//           <i className="bi bi-calendar"></i> {item.created_at}
//         </p>
//         <p
//           className="card-text flex-grow-1"
//           dangerouslySetInnerHTML={{ __html: item.sub_title }}
//         ></p>
//         <div className="mt-3">
//           <Link
//             className="btn btn-primary"
//             href={`/blog/${item.id}`}
//           >
//             Read More
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// }
