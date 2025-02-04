import ProductCarousel from "@/components/product/product-carousel";
import ProductDetails from "@/components/product/product-details";
import { prisma } from "@/lib/prisma";

type tParams = Promise<{ id: string[] }>;

export default async function ProductPage({ params }: { params: tParams }) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    }
  });

  return (
    <div className="relative w-screen h-screen overflow-x-hidden flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <ProductCarousel images={product?.images} />
        </div>
        <div className="flex flex-1 flex-col h-full justify-evenly md:mx-10">
          <ProductDetails product={product!} />
        </div>
      </div>
    </div>
  );
}