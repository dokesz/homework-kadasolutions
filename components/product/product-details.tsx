import { Product } from "@/lib/interfaces/product.interface";
import { Button } from "../ui/button";
import CustomBadge from "../ui/custom-badge";
import RatingStars from "./product-rating-stars";

export default function ProductDetails({ product }: { product: Product }) {
    if (!product) return null;
    return (
        <>
            <div className="flex justify-between w-full">
                <h1 className="font-bold text-2xl">{product?.title}</h1>
                <RatingStars rating={product.rating} />
            </div>
            <p>{product.description}</p>
            <p className="text-gray-500">Stock: {product.stock}</p>
            <p className="text-gray-500">Brand: {product.brand}</p>
            <p className="text-gray-500">Category: {product.category}</p>
            <CustomBadge discount={product.discountPercentage} />
            <div className="flex justify-between">
                <p className="font-bold text-4xl">{product.price} $</p>
                <Button className="font-bold rounded-full">
                    Add to cart
                </Button>
            </div>
        </>
    )
}