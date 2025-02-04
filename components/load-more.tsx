"use client"

import { fetchProducts } from "@/lib/actions/fetch-products";
import { Product } from "@/lib/interfaces/product.interface";
import { useEffect, useState } from "react";
import ProductCard from "./product/product-card";


export default function LoadMore() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasmore] = useState(true);
    const [skip, setSkip] = useState(10);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + Math.ceil(window.pageYOffset) >= document.documentElement.scrollHeight - 100 && !isLoading) {
                setIsLoading(true);
                fetchProducts(skip, 10).then(data => {
                    setProducts(prevProducts => [...prevProducts, ...data]);
                    setSkip(prevSkip => prevSkip + 10);
                    data.length > 0 ? setHasmore(true) : setHasmore(false);
                    setIsLoading(false);
                });
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading, skip]);

    return (
        <>
            {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            {isLoading && hasMore && <div className="col-span-full text-center py-4">Loading more products...</div>}
            {!hasMore && <div className="col-span-full text-center py-4">No more products to load</div>}
        </>
    )
}