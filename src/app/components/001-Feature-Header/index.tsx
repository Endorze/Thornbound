
'use client';

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
        { name: 'ABOUT US', href: '/about us' },
        { name: 'CREDITS', href: '/credits' }
    ];

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
    const changeLanguage = (lang: "en" | "swe") => {
        setLanguage(lang);
        setIsDropdownOpen(false);
    };

    return (
        <header className="bg-black text-white w-full px-6 py-4 flex justify-between items-center flex-wrap md:flex-nowrap relative z-10">
            <nav className="flex flex-wrap gap-6 md:gap-16 items-center">
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href} className="relative group">
                        <span
                            className={`text-sm tracking-widest ${pathname === item.href ? 'text-white' : 'text-gray-300'}`}
                        >
                            {item.name}
                        </span>
                        {pathname === item.href && (
                            <span className="absolute bottom-[-25px] left-0 w-full h-[2px] bg-white"></span>
                        )}
                    </Link>
                ))}
            </nav>

            <div className="relative mt-4 md:mt-0">
                <button onClick={toggleDropdown} className="flex items-center justify-center" 
                aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                     aria-label="Language selector">
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

