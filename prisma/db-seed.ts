import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 100; i++) {
    const product: Prisma.ProductCreateInput = {
      title: `Product ${i + 1}`,
      description: `This is a product ${i + 1}`,
      price: parseFloat((Math.random() * 1000).toFixed(2)),
      discountPercentage: parseFloat((Math.random() * 10).toFixed(2)),
      rating: parseFloat((Math.random() * 5).toFixed(2)),
      stock: Math.floor(Math.random() * 10),
      brand: `Brand ${i + 1}`,
      category: `Category ${i + 1}`,
      images: [
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
        "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png",
        "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/thumbnail.png",
      ],
    };

    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
