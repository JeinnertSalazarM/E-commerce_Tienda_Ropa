"use client"

import { useRouter } from "next/navigation";
import { Carousel, CarouselItem } from "./ui/carousel";

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
            <Carousel className="mx-auto max-w-4xl h-full">
                {dataCarouselTop.map((item) => (
                    <CarouselItem key={item.id} onClick={() => router.push(item.link)}
                        className="flex flex-col justify-center items-center p-4 h-full">
                        <h1 className="font-bold text-gray-800 text-2xl">{item.title}</h1>
                        <p className="text-gray-600">{item.description}</p>

                    </CarouselItem>
                ))}
                <CarouselItem>

                </CarouselItem>
            </Carousel>
        </div >
    );
}

export default CarouselTextBanner;