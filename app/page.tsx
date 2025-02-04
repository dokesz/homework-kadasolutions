import LoadMore from "@/components/load-more";
import ProductCard from "@/components/product/product-card";
import { fetchProducts } from "@/lib/actions/fetch-products";
import { Product } from "@/lib/interfaces/product.interface";

export default async function ProductList() {

  const products = await fetchProducts(0, 10);

  return (
    <div className="overflow-x-hidden">
      <p className="text-3xl font-bold text-center my-6">See products</p>
      <main className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-7xl">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <LoadMore />
      </main>
    </div>
  );
}