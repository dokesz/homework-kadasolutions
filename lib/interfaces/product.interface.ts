import { Prisma } from "@prisma/client";

export interface Product {
  id?: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images?: Prisma.ProductCreateimagesInput | string[];
  updatedAt?: Date | string;
  createdAt?: Date | string;
}
