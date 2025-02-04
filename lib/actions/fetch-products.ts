"use server";

import { env } from "process";

export const fetchProducts = async (skip: number, limit: number) => {
  const baseUrl =
    process.env.NODE_ENV === "production" ? env.PROD_URL : env.BASE_URL;

  const response = await fetch(
    `${baseUrl}/api/products?skip=${skip}&limit=${limit}`
  );
  const data = await response.json();
  return data;
};
