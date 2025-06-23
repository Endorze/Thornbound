'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiGlobalLine } from "react-icons/ri";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useLanguage } from "../../../contexts/LanguageContext";

const Header = () => {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.lore'), href: '/lore' },
    { name: t('nav.aboutUs'), href: '/aboutus' },
    { name: t('nav.credits'), href: '/credits' }
  ];

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const changeLanguage = (lang: "en" | "sv") => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="bg-black text-white w-full px-6 py-4 relative z-10">
      {/* Mobile Header */}
      <div className="flex justify-between items-center md:hidden">
        {/* Hamburger */}
        <button onClick={toggleMenu} aria-label={t('ui.toggleMenu')}>
          {menuOpen ? <HiOutlineX className="w-8 h-8" /> : <HiOutlineMenu className="w-8 h-8" />}
        </button>

        {/* Globe on right */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-center"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
            aria-label={t('language.switchLanguage')}
          >
            <RiGlobalLine className="w-8 h-8 text-white" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-md z-50">
              <button
                onClick={() => changeLanguage("en")}
                className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-700 ${language === 'en' ? 'text-white' : 'text-gray-400'}`}
              >
                {t('language.english')}
              </button>
              <button
                onClick={() => changeLanguage("sv")}
                className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-700 ${language === 'sv' ? 'text-white' : 'text-gray-400'}`}
              >
                {t('language.swedish')}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 mt-4 md:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="relative group">
              <span
                className={`text-sm tracking-widest ${pathname === item.href ? 'text-white' : 'text-gray-300'}`}
              >
                {item.name}
              </span>
              {pathname === item.href && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></span>
              )}
            </Link>
          ))}
        </nav>
      )}

      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center">
        {/* Left Nav */}
        <nav className="flex gap-10">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="relative group inline-block">
              <span
                className={`text-sm tracking-widest ${pathname === item.href ? 'text-white' : 'text-gray-300'
                  }`}
              >
                {item.name}
              </span>
              <span
                className={`absolute bottom-[-25px] left-0 h-[2px] bg-white transition-all duration-300
      ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Right Globe */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-center"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
            aria-label={t('language.switchLanguage')}
          >
            <RiGlobalLine className="w-8 h-8 text-white" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-md z-50">
              <button
                onClick={() => changeLanguage("en")}
                className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-700 ${language === 'en' ? 'text-white' : 'text-gray-400'}`}
              >
                {t('language.english')}
              </button>
              <button
                onClick={() => changeLanguage("sv")}
                className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-700 ${language === 'sv' ? 'text-white' : 'text-gray-400'}`}
              >
                {t('language.swedish')}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;


