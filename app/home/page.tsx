import React from 'react';
import { MdOutlineSpaceDashboard, MdOutlineInventory2, MdLogout } from "react-icons/md";
import { FiUsers, FiPlus } from "react-icons/fi";
import { GiMedicines } from "react-icons/gi";
import { HiOutlinePlusSm } from "react-icons/hi";
import Link from 'next/link';
import Navbar from '../_components/Navbar';

export default function Home() {
  return (

    <>
    <Navbar/>

    <div className="flex h-screen w-full bg-[#e6f4f1] font-sans overflow-hidden">
      
      {/* Sidebar - الجزء الأيسر الغامق */}
      <aside className="w-1/3 bg-[#2d8a8a] text-white p-8 flex flex-col justify-between rounded-r-[50px] shadow-2xl relative">
        
        <div>
          <h1 className="text-4xl font-bold mb-10 tracking-tight">Manager page</h1>
          
          <nav className="space-y-5">
            {/* Check Sales */}
            <div className="bg-[#5fb3b3] p-4 rounded-xl flex items-center gap-4 shadow-md border border-white/10">
              <div className="bg-white/20 p-2 rounded-lg text-2xl">
                <MdOutlineSpaceDashboard />
              </div>
              <div>
                <p className="text-sm font-medium leading-none">Check sales</p>
                <p className="text-[10px] opacity-80 mt-1 uppercase tracking-tighter">Today's Sales</p>
                <div className="bg-white/30 px-3 py-0.5 mt-1 rounded text-sm font-bold w-fit">2,450</div>
              </div>
            </div>

            {/* Manage Inventory */}
            <div className="bg-[#5fb3b3] p-4 rounded-xl flex items-center justify-between shadow-md border border-white/10">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-lg text-2xl">
                  <MdOutlineInventory2 />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">Manage Inventory</p>
                  <p className="text-[10px] opacity-80 mt-1 uppercase tracking-tighter">Available Products</p>
                  <p className="text-sm font-bold">Items 1,280</p>
                </div>
              </div>
              <Link href={"manage_inventory"} className="bg-white/20 p-1 rounded-md cursor-pointer hover:bg-white/40">
                <HiOutlinePlusSm size={20} />
              </Link>
            </div>

            {/* Manage Employee */}
            <div className="bg-[#5fb3b3] p-4 rounded-xl flex items-center justify-between shadow-md border border-white/10">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-lg text-2xl">
                  <FiUsers />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">Manage Employee</p>
                  <p className="text-[10px] opacity-80 mt-1 uppercase tracking-tighter">Employees Active</p>
                  <p className="text-sm font-bold">12 Staff</p>
                </div>
              </div>
              <Link href={"manage_employee"} className="bg-white/20 p-1 rounded-md cursor-pointer hover:bg-white/40">
                <HiOutlinePlusSm size={20} />
              </Link>
            </div>

            {/* Get Supplied Medicine */}
            <div className="pt-6 mt-4 text-xl font-semibold border-t border-white/20 cursor-pointer hover:translate-x-2 transition-transform">
              Get Supplied Medicine
            </div>
          </nav>
        </div>

        {/* Footer Sidebar */}
        <div className="space-y-6">
          <p className="text-center italic opacity-70 tracking-[0.2em] text-sm">
            Efficiency . Accuracy . Care
          </p>
          <Link href={"login"} className="w-full flex items-center justify-center gap-3 text-2xl font-bold hover:text-red-200 transition-colors">
            <div className="rotate-180">
              <MdLogout />
            </div> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content - الجزء الأيمن */}
      <main className="flex-1 relative p-16 flex flex-col justify-center">
        
        {/* Logo (Top Right) */}
        <div className="absolute top-10 right-14 flex items-center gap-3 text-[#2d8a8a]">
           <div className="border-[3px] border-[#2d8a8a] p-1.5 rounded-sm">
              <GiMedicines size={35} />
           </div>
           <div className="font-black leading-[0.8] uppercase">
              <p className="text-[10px]">Dr</p>
              <p className="text-xl tracking-tighter">Basiouny</p>
              <p className="text-[9px] tracking-[0.3em]">Pharmacy</p>
           </div>
        </div>

        {/* Hero Text */}
        <div className="z-10 mb-20">
          <h2 className="text-6xl font-bold text-[#2d8a8a] leading-tight">
            Welcome back, Manager
          </h2>
          <p className="text-4xl font-semibold text-[#4fa4a4] mt-2 mb-12">
            Manage your pharmacy <br /> with ease and efficiency
          </p>
          
          <button className="bg-[#106e6e] text-white px-12 py-4 rounded-lg text-2xl font-bold shadow-xl hover:bg-[#0b5252] transition-all active:scale-95">
            Check More
          </button>
        </div>

        {/* Illustration Section */}
        {/* <div className="absolute bottom-0 right-0 w-[60%] h-[70%]">
        
           <img 
             src="/path-to-your-illustration.png" 
             alt="Pharmacist illustration" 
             className="w-full h-full object-contain object-right-bottom"
           />
        </div> */}
      </main>
    </div>
    </>
  );
}