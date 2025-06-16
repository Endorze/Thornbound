'use client'

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiGlobalLine } from "react-icons/ri";

const Header = () => {
    const pathname = usePathname();
    const [language, setLanguage] = useState<"en" | "swe">("en");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navItems = [
        { name: 'HOME', href: '/' },
        { name: 'LORE', href: '/lore' },
        { name: 'ABOUT US', href: '/about' },
        { name: 'CREDITS', href: '/credits' }
    ];

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
    const changeLanguage = (lang: "en" | "swe") => {
        setLanguage(lang);
        setIsDropdownOpen(false);
    };

    return (
        <header className="bg-black text-white w-full px-12 py-2 flex justify-between items-center relative z-10">
            <nav className="flex gap-20 ml-10">
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href} className="relative group">
                        <span
                            className={`text-sm tracking-widest ${pathname === item.href ? 'text-white' : 'text-gray-300'}`}
                        >
                            {item.name}
                        </span>
                        {pathname === item.href && (
                            <span className="absolute bottom-[-18px] left-0 w-full h-0.5 bg-white"></span>
                        )}
                    </Link>
                ))}
            </nav>

            <div className="relative">
                <button onClick={toggleDropdown} className="w-6 h-6">
                    <RiGlobalLine className="w-10 h-8 text-white" />
                </button>

                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-md z-50">
                        <button
                            onClick={() => changeLanguage("en")}
                            className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-700 ${language === 'en' ? 'text-white' : 'text-gray-400'}`}
                        >
                            English
                        </button>
                        <button
                            onClick={() => changeLanguage("swe")}
                            className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-700 ${language === 'swe' ? 'text-white' : 'text-gray-400'}`}
                        >
                            Svenska
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
