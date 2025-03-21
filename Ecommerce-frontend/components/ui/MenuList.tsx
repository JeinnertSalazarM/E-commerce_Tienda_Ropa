"use client"

import Link from "next/link"
import * as React from "react"


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Pantalones Elegantes",
        href: "/productos/pantalones-elegantes",
        description:
            "Pantalones de vestir con corte clásico, perfectos para eventos formales o de oficina.",
    },
    {
        title: "Blusas de Seda",
        href: "/productos/blusas-seda",
        description:
            "Blusas confeccionadas en seda premium, ideales para un look sofisticado y cómodo.",
    },
    {
        title: "Vestidos de Noche",
        href: "/productos/vestidos-noche",
        description:
            "Vestidos largos y elegantes, pensados para resaltar en ocasiones especiales.",
    },
    {
        title: "Faldas Plisadas",
        href: "/productos/faldas-plisadas",
        description:
            "Faldas con diseño plisado, perfectas para un look casual o de oficina.",
    },
    {
        title: "Chaquetas de Temporada",
        href: "/productos/chaquetas-temporada",
        description:
            "Chaquetas modernas y versátiles, perfectas para complementar cualquier outfit.",
    },
    {
        title: "Accesorios Doraly",
        href: "/productos/accesorios",
        description:
            "Encuentra los mejores accesorios para darle ese toque final a tu estilo.",
    },
];


const MenuList = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="gap-3 grid lg:grid-cols-[.75fr_1fr] p-6 md:w-[400px] lg:w-[500px]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex flex-col justify-end focus:shadow-md p-6 rounded-md outline-none w-full h-full no-underline select-none"
                                        href="/"
                                    >
                                        <div className="mt-4 mb-2 font-medium text-lg">
                                            Diseños Doraly Boutique
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            En Diseños Doraly confeccionamos cada prenda de manera artesanal, cuidando cada detalle para ofrecerte piezas únicas y hechas a tu medida.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/shop" title="Tienda">
                                Accede a toda tu información, tus pedidos y mucho má<s className=""></s>
                            </ListItem>
                            <ListItem href="/season" title="Temporada">
                                Descubre nuestra colección de temporada, con diseños exclusivos y confección a medida que reflejan la elegancia y frescura de esta estación
                            </ListItem>
                            <ListItem href="/wholesealer" title="Mayoristas">
                                Ofrecemos precios especiales para mayoristas que buscan calidad, confección propia y diseños exclusivos para su negocio.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Colecciones</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/accesorios" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Acessorios
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default MenuList

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="font-medium text-sm leading-none">{title}</div>
                    <p className="text-muted-foreground text-sm line-clamp-2 leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"



