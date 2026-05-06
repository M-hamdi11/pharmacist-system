'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiArrowLeft, FiMenu, FiX } from "react-icons/fi"; // أضفنا أيقونات القائمة والقفل

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // حالة لفتح وقفل المنيو في الموبايل

  const navLinks = [
    { name: "Service", href: "/service" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 border-2 border-[#0d7a71] p-1 rounded-sm select-none hover:opacity-80 transition">
            <div className="text-xl md:text-2xl text-[#0d7a71] font-bold leading-none">B</div>
            <div className="flex flex-col">
              <span className="text-[7px] md:text-[8px] font-bold text-[#0d7a71] uppercase leading-none tracking-tighter">
                Dr. Basiouny
              </span>
              <span className="text-[9px] md:text-[10px] font-black text-[#0d7a71] uppercase leading-none">
                Pharmacy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation & Back Button */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#0d7a71] font-bold text-sm relative group transition-all"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0d7a71] transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Back Button Desktop */}
            <button 
              onClick={() => router.back()} 
              className="bg-[#2d8a8a] text-white p-2 rounded-full hover:bg-[#1f5e5e] transition shadow-sm"
            >
              <FiArrowLeft size={20} />
            </button>
          </div>

          {/* Mobile Buttons (Back + Burger) */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              onClick={() => router.back()} 
              className="bg-[#2d8a8a] text-white p-2 rounded-full hover:bg-[#1f5e5e]"
            >
              <FiArrowLeft size={18} />
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0d7a71] p-2 focus:outline-none"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out bg-white border-b border-gray-100 overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // يقفل المنيو لما تضغط على لينك
              className="block px-3 py-3 text-[#0d7a71] font-bold text-base hover:bg-[#e6f4f1] rounded-lg transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}