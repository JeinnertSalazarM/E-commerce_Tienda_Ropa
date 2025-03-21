"use client"
import { Heart, ShoppingCart, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ItemsMenuMobile from './ItemsMenuMobile';
import MenuList from './MenuList';



const Navbar = () => {
    const router = useRouter();
    return (
        <div className="flex justify-between items-center p-4 sm:px-8 h-16 text-yellow-400 cursor-pointer">
            <h1 className="font-bold text-3xl"
                onClick={() => router.push("/")}
            > Doraly Boutique</h1>

            <div className='hidden sm:flex justify-between items-center'>
                <MenuList></MenuList>
            </div>
            <div className="sm:hidden flex">
                <ItemsMenuMobile></ItemsMenuMobile>
            </div>
            <div className="flex justify-between items-center gap-2 sm:gap-7">
                <ShoppingCart strokeWidth='1' className='cursor-pointer' onClick={() => router.push("/cart")}></ShoppingCart>

                <Heart strokeWidth='1' className='cursor-pointer' onClick={() => router.push("/loved-products")}></Heart>
                <User strokeWidth='1' className='cursor-pointer' ></User>

            </div >
        </div >

    );
}

export default Navbar;