"use server";

export const fetchProducts = async (skip: number, limit: number) => {
  const response = await fetch(
    `http://localhost:3000/api/products?skip=${skip}&limit=${limit}`
  );
  const data = await response.json();
  return data;
};
