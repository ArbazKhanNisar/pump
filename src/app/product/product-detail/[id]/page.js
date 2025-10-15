import ProductDetail from '../productdetail';

async function getProduct(id) {
  try {
    const res = await fetch(
      `https://ghostwhite-alligator-811158.hostingersite.com/api/product-detail/${id}`,
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

export default async function ProductPage({ params }) {
  // asynchronous access of `params.id`.
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) return notFound(); // cleaner than <p>Product not found</p>
  if (product.error)
    return (
      <section className="px-6 py-8 text-danger">
        <p>Error: {product.error}</p>
      </section>
    );

  return (
    <section className="px-6 py-8">
      <ProductDetail product={product} />
    </section>
  );
}
