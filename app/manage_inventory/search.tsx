'use client';
import { FiSearch } from "react-icons/fi";

export default function Searchbar({ setSearch }) {
    return (
      <div className="relative w-full md:w-64">
        <input 
          onChange={(e) => setSearch(e.target.value.toLowerCase())} // بنبعت القيمة للأب فوراً
          type="text" 
          placeholder="Search products..." 
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#2d8a8a]/30 focus:outline-none focus:ring-2 focus:ring-[#2d8a8a]"
        />
        <div className="absolute left-3 top-3 text-gray-400">
          <FiSearch />
        </div>
      </div>
    )
  }