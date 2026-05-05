"use client";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-sans select-none">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
          alt="Medical Background" 
          className="w-full h-full object-cover scale-105"
        />
        {/* Overlay لدمج الصورة مع لون البراند بتاعك وتقليل التشتيت */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d7a71]/95 via-[#0d7a71]/80 to-[#0d7a71]/90 backdrop-blur-[2px]"></div>
      </div>

      {/* Background Pattern - Cubes Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat z-1"></div>

      {/* Main Content Container */}
      <div className="z-10 flex flex-col items-center text-center px-4 animate-in fade-in zoom-in duration-1000">
        
        {/* Logo Frame - Using your official logo */}
        <div className="mb-12 border-[4px] border-white/60 p-6 md:p-10 inline-block shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl rounded-[2rem] group hover:border-white transition-all duration-700 bg-white/5">
        <div className="w-48 h-auto md:w-64 flex items-center justify-center">
                 <img 
                    src="/Logo (1).png" 
                    alt="Dr Basiouny Pharmacy Logo" 
                    className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-700 ease-out" 
                 />
            </div>
        </div>

        {/* Text Section */}
        <div className="space-y-4">
          <h2 className="text-white text-2xl md:text-4xl font-light tracking-[0.5em] uppercase opacity-90">
            Welcome To
          </h2>
          
          <div className="relative inline-block mt-2">
            {/* Soft Glow behind name */}
            <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full"></div>
            
            <h1 className="relative text-[#0d7a71] bg-white px-12 py-5 text-3xl md:text-6xl font-black rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] tracking-tighter uppercase transition-transform hover:scale-105 duration-500">
              Basiouny Pharmacy
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Bar & Next Button */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex justify-between items-end z-10">
        
        {/* Decorative Line */}
        <div className="hidden md:block w-1/4 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent mb-8 rounded-full"></div>

        {/* Next Button */}
        <Link
          href="/login" 
          className="group flex items-center gap-6 bg-white text-[#0d7a71] px-12 py-6 rounded-full font-black text-2xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:bg-[#f0f9f8] transition-all duration-300 transform hover:-translate-y-3 active:scale-95"
        >
          <span className="tracking-tight">Get Started</span>
          <span className="group-hover:translate-x-3 text-4xl transition-transform duration-300">
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>
      
    </div>
  );
};

export default WelcomePage;