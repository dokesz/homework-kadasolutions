"use client"
import { Product } from "@/lib/interfaces/product.interface";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import CustomBadge from "../ui/custom-badge";

export default function ProductCard({ product }: { product: Product }) {
    const router = useRouter();

    const handleProductClick = (productId: number) => {
        router.push(`/product/${productId}`);
    };

    if (!product) return null;

    return (
        <Card
            className="hover:shadow-lg transition-shadow"
        >
            <CardHeader>
                <div className="relative h-48 w-full">
                    <Image
                        src={Array.isArray(product.images) ? product.images[0] : '/placeholder-image.png'}
                        alt={product.title}
                        fill
                        className="object-cover rounded-t-lg"
                    />
                    <CustomBadge className="absolute top-0 right-0" discount={product.discountPercentage} />
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between">
                    <h2 className="font-bold">{product.title}</h2>
                    <p className="font-semibold">{product.price} $</p>
                </div>
                <p className="text-sm text-gray-600">{product.description}</p>
            </CardContent>
            <CardFooter>
                <Button className="w-full font-bold rounded-full " onClick={() => handleProductClick(product.id!)}>
                    See details
                </Button>
            </CardFooter>
        </Card>
    );
}