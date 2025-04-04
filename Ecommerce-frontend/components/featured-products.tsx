"use client"

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import SkeletonSchema from "./skeletonSchema";
import { Carousel, CarouselContent } from "./ui/carousel";


const FeaturedProducts = () => {
    const { loading, result }: ResponseType = useGetFeaturedProducts()


    return (

        <div className="mx-auto sm:px-24 py-4 sm:py-16 max-w-6xl">
            <h3 className="px-6 sm:pb-8 text-2xl">Productos Destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">

                    {loading && (
                        <SkeletonSchema grid={3}></SkeletonSchema>
                    )}

                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default FeaturedProducts;