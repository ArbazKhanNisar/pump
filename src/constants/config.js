// constants/config.js

// Base URLs
export const PUMP_BASE_URL_CLIENT = "https://ghostwhite-alligator-811158.hostingersite.com";
export const PUMP_BASE_URL_SERVER = "https://ghostwhite-alligator-811158.hostingersite.com/api/";

// API Endpoints
export const API_ENDPOINTS = {
  BLOG_CATEGORY: `${PUMP_BASE_URL_SERVER}blog-category`,
  Contact: `${PUMP_BASE_URL_SERVER}contact`,
  PRODUCT_Enquiry: `${PUMP_BASE_URL_SERVER}product-enquiry`,
  BLOG_LIST: `${PUMP_BASE_URL_SERVER}blogs`,
Newsletter:`${PUMP_BASE_URL_SERVER}newsletter/subscribe`,
  BLOG_Detail: (id)=>`${PUMP_BASE_URL_SERVER}blog-detail/${id}`,
  PRODUCT_DETAIL: (id) => `${PUMP_BASE_URL_SERVER}product-detail/${id}`,
PRODUCT_List: (params) => `${PUMP_BASE_URL_SERVER}products?${params.toString()}`,
  PAGES: `${PUMP_BASE_URL_SERVER}pages`,
  SIGLE_PAGES:(name)=> `${PUMP_BASE_URL_SERVER}pages/${name}`,
  PRODUCT_Type:  `${PUMP_BASE_URL_SERVER}product-type`,
  INDUSTRY_Type:  `${PUMP_BASE_URL_SERVER}industry-type`,
};

// Image host (for next.config.js)
export const IMAGE_DOMAINS=(string)=>  `https://ghostwhite-alligator-811158.hostingersite.com/storage/${string}`;

// App info
export const APP_NAME = "Inventomatic Seals India";


export const logo="/img/isi.png";

// recapcha
export const Site_Key="6LeX7PkrAAAAAAOT_vtJg4QyJRRmbJP9SQQnc8Ls";
export const secret_key="6LeX7PkrAAAAAOsmXSfj93RGBbsX5de4y4iVNK_D";

export function cleanData(data) {
  if (Array.isArray(data)) {
    return data
      .map(cleanData) // clean each element
      .filter(
        (item) =>
          item !== null &&
          item !== undefined &&
          (typeof item !== "object" || Object.keys(item).length > 0)
      );
  } else if (typeof data === "object" && data !== null) {
    const cleaned = {};
    for (const key in data) {
      const value = cleanData(data[key]);
      // keep only non-null meaningful values
      if (
        value !== null &&
        value !== undefined &&
        (typeof value !== "object" || Object.keys(value).length > 0)
      ) {
        cleaned[key] = value;
      }
    }
    return cleaned;
  }
  return data;
}