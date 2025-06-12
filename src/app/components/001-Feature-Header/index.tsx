'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiGlobalLine } from "react-icons/ri";




const Header = () => {
    const pathname = usePathname();

    const navItems = [
        { name: 'HOME', href: '/' },
        { name: 'LORE', href: '/lore' },
        { name: 'ABOUT US', href: '/about' },
        { name: 'CREDITS', href: '/credits' }
    ]
    return (

        <header className="bg-black text-white w-full px-8 py-4 flex justify-between items-center">
            <nav className="flex space-x-14 ml-6">
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href} className="relative group">
                        <span
                            className={`text-sm tracking-widest ${pathname === item.href ? 'text-white' : 'text-gray-300'
                                }`}
                        >
                            {item.name}
                        </span>
                        {pathname === item.href && (
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"></span>
                        )}
                    </Link>
                ))}
            </nav>
            <div>
                 <RiGlobalLine  className="w-6 h-6 text-white" />
            </div>
        </header>
    )
}

export default Header;