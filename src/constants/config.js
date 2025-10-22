// constants/config.js

// Base URLs
export const PUMP_BASE_URL_CLIENT = "https://ghostwhite-alligator-811158.hostingersite.com";
export const PUMP_BASE_URL_SERVER = "https://ghostwhite-alligator-811158.hostingersite.com/api/";

// API Endpoints
export const API_ENDPOINTS = {
  BLOG_CATEGORY: `${PUMP_BASE_URL_SERVER}blog-category`,
  BLOG_LIST: `${PUMP_BASE_URL_SERVER}blogs`,
  PRODUCT_DETAIL: (id) => `${PUMP_BASE_URL_SERVER}/api/product-detail/${id}`,
};

// Image host (for next.config.js)
export const IMAGE_DOMAINS = ["ghostwhite-alligator-811158.hostingersite.com"];

// App info
export const APP_NAME = "Pump Management System";
