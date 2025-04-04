"use client"

import Autoplay from 'embla-carousel-autoplay';
import { useRouter } from "next/navigation";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export const dataCarouselTop = [
    {
        id: 1,
        title: "Envíos en 24/48 horas",
        description: "Como cliente VIP, tus envios en 24/48 horas",
        link: "#!"
    },
    {
        id: 2,
        title: "Envíos gratis",
        description: "Como cliente VIP, tus envios son gratis",
        link: "#!"
    },
    {
        id: 3,
        title: "Descuentos exclusivos",
        description: "Como cliente VIP, tienes descuentos exclusivos",
        link: "#!"
    },
    {
        id: 4,
        title: "Acceso anticipado a nuevas colecciones",
        description: "Como cliente VIP, tienes acceso anticipado a nuevas colecciones",
        link: "#!"
    },
]



const CarouselTextBanner = () => {
    const router = useRouter();
    return (
        <div className="bg-gray-200">
            <Carousel className="mx-auto max-w-4xl h-full"
                plugins={[Autoplay({ delay: 2500 }),

                ]}>
                <CarouselContent>
                    {dataCarouselTop.map(({ id, title, description, link }) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                            <div>
                                <Card className="bg-transparent shadow-none border-none">
                                    <CardContent className="flex flex-col justify-center items-center p-2 text-center">
                                        <p className="sm:text-lg text-wrap">{title}</p>
                                        <p className="text-xs sm:text-sm text-wrap">{description}</p>
                                    </CardContent>

                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>
        </div >
    );
}

export default CarouselTextBanner;