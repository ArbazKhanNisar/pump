// app/sitemap.js (App Router dynamic sitemap)

import { API_ENDPOINTS } from '@/constants/config'; // ⬅️ adjust this path to your actual config

const BASE_URL = process.env.SITEMAP_BASE_URL || 'https://inventomaticseals.com';

async function fetchJson(url) {
  try {
    const res = await fetch(url, { cache: 'no-store' }); // always get fresh data
    if (!res.ok) {
      console.error('Failed to fetch', url, res.status);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error('Fetch error', url, err);
    return null;
  }
}

function formatDate(d) {
  if (!d) return new Date().toISOString();
  try {
    return new Date(d).toISOString();
  } catch (e) {
    return new Date().toISOString();
  }
}

// Helper to fetch all paginated items
async function fetchAllPaginated(fetcher) {
  const all = [];
  let page = 1;
  while (true) {
    let json = null;

    if (typeof fetcher === 'function') {
      const params = new URLSearchParams();
      params.set('page', page);
      const url = fetcher(params);
      json = await fetchJson(url);
    } else if (typeof fetcher === 'string') {
      const separator = fetcher.includes('?') ? '&' : '?';
      const url = `${fetcher}${separator}page=${page}`;
      json = await fetchJson(url);
    } else {
      break;
    }

    const data = json?.data || [];
    all.push(...data);

    const last = json?.last_page;
    if (!last || page >= last) break;
    page += 1;
  }
  return all;
}

// Optional: re-generate every 60 seconds
export const revalidate = 60;

export default async function sitemap() {
  const routes = [];

  // 1) Static routes
  const staticRoutes = [
    '/',
    '/about',
    '/appointment',
    '/blog',
    '/contact',
    '/feature',
    '/service',
    '/team',
    '/testimonial',
    '/product',
    '/careers',
    '/policies',
    '/sitemap',
  ];

  const now = new Date();
  for (const r of staticRoutes) {
    routes.push({
      url: `${BASE_URL}${r}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: r === '/' ? 1.0 : 0.7,
    });
  }

  // 2) Blogs (same logic as your script)
  const allBlogs = await fetchAllPaginated(API_ENDPOINTS.BLOG_LIST);
  for (const b of allBlogs) {
    routes.push({
      url: `${BASE_URL}/blog/blogdetail/${b.id}`,
      lastModified: formatDate(b.updated_at || b.created_at),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // 3) Products
  const allProducts = await fetchAllPaginated((params) => API_ENDPOINTS.PRODUCT_List(params));
  for (const p of allProducts) {
    routes.push({
      url: `${BASE_URL}/product/product-detail/${p.id}`,
      lastModified: formatDate(p.updated_at || p.created_at),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  }

  return routes;
}
