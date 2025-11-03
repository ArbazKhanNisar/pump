import ProductDetail from '../productdetail';
import { API_ENDPOINTS } from '@/constants/config';
async function getProduct(id) {
  try {
    const res = await fetch(
      `${ API_ENDPOINTS.PRODUCT_DETAIL(id)}`,
      { cache: "no-store" } // SSR fetch
    );

    if (!res.ok) throw new Error(`Failed to fetch product: ${res.status}`);

    const json = await res.json();
    const raw = json.data?.[0];

    if (!raw) return null;

    // Map null specs to "—"
    const product = {
      id: raw.id,
      title: raw.title,
      model: raw.model,
      type: raw.type,
      drive: raw.drive,
      image: raw.image,
      images:( raw.product_images||[
       
  ]).map(sep=>(sep.image)),
      description: raw.description || "",
      product_applications: raw.product_applications || [],
      product_model_features: raw.product_model_features || [],
      product_resources: raw.product_resources || [],
      product_specifications: (raw.product_specifications || []).map(spec => ({
        id: spec.id,
        name: spec.name ?? "—",
        value: spec.value ?? "—"
      })),
      status: raw.status,
      created_at: raw.created_at,
      updated_at: raw.updated_at
    };

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return { error: error.message }; // return error so the component can handle it
  }
}

async function getRelativeProduct(id) {
  try {
    const res = await fetch(
      `${ API_ENDPOINTS.Relted_PRODUCT(id)}`,
      { cache: "no-store" } // SSR fetch
    );

    if (!res.ok) throw new Error(`Failed to fetch product: ${res.status}`);

    const json = await res.json();
    const raw = json.data;

    if (!raw) return [];

    // Map null specs to "—"
   

    return raw;
  } catch (error) {
    console.error("Error fetching product:", error);
    return []; // return error so the component can handle it
  }
}




export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const res = await fetch(
      `${ API_ENDPOINTS.PRODUCT_DETAIL(id)}`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error(`Failed to fetch product: ${res.status}`);

    const json = await res.json();
    const raw = json.data?.[0];

    return {
      title: raw?.meta_title || "Product Detail - Company Name",
      description:
        raw?.meta_description || "View detailed specifications of our products.",
      keywords:
        raw?.meta_keywords || "pumps, industrial, product, details, specifications",
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Product Detail",
      description: "View detailed product information.",
    };
  }
}

export default async function ProductPage({ params }) {
  // asynchronous access of `params.id`.
  const { id } = await params;
  const product = await getProduct(id);
  const relatedproduct = await getRelativeProduct(id);

  
  if (!product) return notFound(); // cleaner than <p>Product not found</p>
  if (product.error)
    return (
      <section className="px-6 py-8 text-danger">
        <p>Error: {product.error}</p>
      </section>
    );

  return (
    <section className="px-6 py-8">
      <ProductDetail product={product}  relatedPumps={relatedproduct} />
    </section>
  );
}
