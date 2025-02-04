import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function ProductCarousel({ images }: { images: string[] | undefined }) {
    return (
        <Carousel className="w-full max-w-xs md:max-w-xl">
            <CarouselContent>
                {images?.map((image) => (
                    <CarouselItem key={image}>
                        <div className="flex items-center justify-center p-1">
                            <Image src={image} alt="Carousel image" width={500} height={500} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}