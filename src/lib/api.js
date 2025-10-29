import { API_ENDPOINTS } from "@/constants/config";
import { cache } from "react";

export async function fetchBlogs({ category = "", title = "" }) {
    try {
      const params = new URLSearchParams();
      if (category && category !== "All") params.append("blog_category_id", category);
      if (title) params.append("title", title);
  
      const url = `${API_ENDPOINTS.BLOG_LIST}?${params.toString()}`;
      const res = await fetch(url, { cache: "no-store" });
  
      if (!res.ok) throw new Error("Failed to fetch blogs");
  
      const json = await res.json();
      return json.data || [];
    } catch (err) {
      console.error("fetchBlogs error:", err);
      return [];
    }
  }

export const getPagesMetaData = cache(async (name) => {
    try {
      const res = await fetch(API_ENDPOINTS.SIGLE_PAGES(name), {
        
      });
  
      if (!res.ok) throw new Error(`Failed to fetch page metadata for: ${name}`);
  
      const json = await res.json();
      return json?.data || {};
    } catch (error) {
      console.error(`❌ Error fetching page meta (${name}):`, error);
      return {};
    }
  });


  export async function getPumps() {
    const res = await fetch(
      `${API_ENDPOINTS.PRODUCT_List("")}`,
      { cache: "no-store" }
    );
  
    if (!res.ok) throw new Error("Failed to fetch pumps");
    const data = await res.json();
    return data.data || [];
  }
  
  export async function getProductTypes() {
    const res = await fetch(
     `${API_ENDPOINTS.PRODUCT_Type}`,
      { cache: "no-store" }
    );
  
    if (!res.ok) throw new Error("Failed to fetch industry types");
    const data = await res.json();
    return data.data || [];
  }
  
  
  export async function getIndustryTypes() {
    const res = await fetch(
      `${API_ENDPOINTS.INDUSTRY_Type}`,
      { cache: "no-store" }
    );
  
    if (!res.ok) throw new Error("Failed to fetch industry types");
    const data = await res.json();
    return data.data || [];
  }
  
  export async function fetchBlogsDetail(id) {
    try {
      const url = `${API_ENDPOINTS.BLOG_Detail(id)}`;
      const res = await fetch(url);
  
      if (!res.ok) throw new Error("Failed to fetch blogs");
  
      const json = await res.json();
      return json.data || [];
    } catch (err) {
      console.error("fetchBlogs error:", err);
      return [];
    }
  }