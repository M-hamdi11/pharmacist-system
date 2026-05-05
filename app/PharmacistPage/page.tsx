'use client';
import React from 'react';
import { MdOutlineInventory2, MdHistory, MdLogout } from "react-icons/md";
import { FiPlus, FiBox, FiTrendingUp } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Navbar from '../_components/Navbar';

export default function PharmacistPage() {
  const router = useRouter();

  const handleLogout = () => {
    toast.info("Logged out successfully");
    router.push("/login");
  };

  return (
    <>
    <Navbar/>

    <div className="min-h-screen bg-[#e6f4f1] flex flex-col md:flex-row p-0 m-0 overflow-hidden">
      
      {/* Sidebar - الحواف دائرية جداً من ناحية اليمين زي الصورة */}
      <div className="w-full md:w-[420px] bg-[#2d8a8a] p-10 flex flex-col justify-between text-white md:min-h-[95vh] md:m-4 md:rounded-[60px] shadow-2xl">
        <div>
          {/* Logo Section */}
          <div className="flex items-center gap-3 bg-white text-[#2d8a8a] p-3 rounded-xl w-fit mb-12 shadow-md">
             <MdOutlineInventory2 size={28} />
             <div className="font-bold text-xs leading-tight">
                DR. BASIOUNY <br/> PHARMACY
             </div>
          </div>
          
          <div className="space-y-5">
            {/* Today's Stats / Check Sales style */}
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-[25px] flex items-center gap-5 border border-white/10 group transition-all">
              <div className="bg-white/20 p-3 rounded-2xl">
                <FiTrendingUp size={28} color="rgba(255, 255, 255, 0.8)" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium opacity-70 italic">Daily Orders</p>
                <h4 className="font-bold text-2xl tracking-tight">142 Orders</h4>
              </div>
            </div>

            {/* Manage Inventory Card */}
            <Link href="/manage_inventory" className="bg-white/30 backdrop-blur-md p-6 rounded-[25px] flex items-center gap-5 hover:bg-white/40 transition-all border border-white/20 group shadow-lg">
              <div className="bg-white/20 p-3 rounded-2xl">
                <MdOutlineInventory2 size={28} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium opacity-70 italic">Manage Inventory</p>
                <h4 className="font-bold text-2xl tracking-tight">Items 1,280</h4>
              </div>
              <div className="bg-white/30 p-2 rounded-lg group-hover:bg-white text-white group-hover:text-[#2d8a8a] transition-all">
                <FiPlus size={20} />
              </div>
            </Link>

            {/* Low Stock Alert */}
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-[25px] flex items-center gap-5 border border-white/10 opacity-90 hover:opacity-100 transition-all">
              <div className="bg-white/20 p-3 rounded-2xl">
                <FiBox size={28} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium opacity-70 italic">Low Stock Alert</p>
                <h4 className="font-bold text-2xl text-red-200 tracking-tight">5 Items</h4>
              </div>
              <div className="bg-white/30 p-2 rounded-lg text-white">
                <FiPlus size={20} />
              </div>
            </div>
          </div>

          {/* Section title like "Get Supplied Medicine" */}
          <div className="mt-12">
             <h3 className="text-2xl font-bold tracking-wide border-b border-white/20 pb-4 inline-block">
               Pharmacist Tools
             </h3>
          </div>
        </div>

        {/* Bottom Section: Logout & Footer Text */}
        <div className="flex flex-col items-center gap-8">
          <p className="text-sm font-medium opacity-60 italic tracking-[3px]">
            Efficiency . Accuracy . Care
          </p>
          
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 text-white text-3xl font-bold hover:text-red-200 transition-all active:scale-95 group"
          >
            <div className="group-hover:-translate-x-1 transition-transform">
              <MdLogout />
            </div>
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-16 flex flex-col justify-center relative">
        <div className="max-w-3xl">
          <h1 className="text-[85px] font-bold text-[#2d8a8a] mb-4 leading-[0.9] tracking-tight">
            Welcome back, <br/> Pharmacist
          </h1>
          <p className="text-4xl text-[#3a8b8b] font-medium opacity-80 mb-12 leading-snug">
            Manage your pharmacy <br/> with ease and efficiency
          </p>
          
          <Link href="/manage_inventory">
            <button className="bg-[#1f5e5e] text-white px-12 py-5 rounded-2xl text-2xl font-bold hover:bg-[#2d8a8a] transition-all shadow-[0_20px_50px_rgba(45,138,138,0.3)] active:scale-95">
                Check More
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}