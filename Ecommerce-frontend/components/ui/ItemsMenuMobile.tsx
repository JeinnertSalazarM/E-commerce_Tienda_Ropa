import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import Link from "next/link";



const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger> <Menu ></Menu></PopoverTrigger>
            <PopoverContent >
                <Link href="/categories/vestidos" className="block hover:text-yellow-400">Vestidos</Link>
                <Link href="/categories/blusas" className="block hover:text-yellow-400">Blusas</Link>
                <Link href="/categories/shorts" className="block hover:text-yellow-400" >Shorts</Link>
                <Link href="/categories/camisetas" className="block hover:text-yellow-400">Camisetas</Link>

            </PopoverContent>
        </Popover>
    )
}




export default ItemsMenuMobile;    