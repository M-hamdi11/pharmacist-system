"use client";
import React, { ChangeEvent } from "react";
import { FiSearch } from "react-icons/fi";

// 1. تعريف الـ Props للـ Component
interface SearchbarProps {
  // setSearch عبارة عن Dispatch لـ State من نوع String
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Searchbar({ setSearch }: SearchbarProps) {
  
  // 2. معالجة التغيير مع تحديد نوع الـ Event
  const handle_search = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="relative w-full md:w-64 group">
      <input
        onChange={handle_search}
        type="text"
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#2d8a8a]/30 focus:outline-none focus:ring-2 focus:ring-[#2d8a8a] bg-white/50 backdrop-blur-sm transition-all group-hover:border-[#2d8a8a]/60"
      />
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2d8a8a] transition-colors">
        <FiSearch size={18} />
      </div>
    </div>
  );
}