'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 px-8 py-4 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-2 border-2 border-[#0d7a71] p-1.5 rounded-sm select-none">
        <div className="text-2xl text-[#0d7a71] font-bold leading-none">B</div>
        <div className="flex flex-col">
          <span className="text-[8px] font-bold text-[#0d7a71] uppercase leading-none tracking-tighter">
            Dr. Basiouny
          </span>
          <span className="text-[10px] font-black text-[#0d7a71] uppercase leading-none">
            Pharmacy
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-8">
         <div onClick={() => router.back()}  className="bg-[#2d8a8a] text-white p-2 rounded-full hover:bg-[#1f5e5e] transition">
                    <FiArrowLeft size={24} />
                  </div>
        <div className="hidden md:flex space-x-6 items-center">
          {["Service", "About", "Contact"].map((link) => (
            <Link
              href={`/${link.toLowerCase()}`}
              key={link}
              className="text-[#0d7a71] font-bold text-sm cursor-pointer relative group transition-all"
            >
              {link}

              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0d7a71] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
