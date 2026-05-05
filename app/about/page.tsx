import React from 'react';
import { MdOutlineHealthAndSafety, MdVerifiedUser } from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { FiTarget } from "react-icons/fi";
import Navbar from '../_components/Navbar';

export default function About() {
  return (
    <>
    <Navbar/>
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image/Visual Side */}
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[50px] overflow-hidden shadow-2xl border-8 border-[#e6f4f1]">
              <img 
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1000&auto=format&fit=crop" 
                alt="Modern Pharmacy" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-[#2d8a8a] text-white p-10 rounded-[40px] shadow-xl z-20 hidden md:block">
              <h3 className="text-5xl font-extrabold mb-1">2026</h3>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Innovation Year</p>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#86d2cc]/20 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Text Content Side */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-[#2d8a8a] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                About Our Pharmacy
              </h2>
              <h1 className="text-5xl font-extrabold text-[#1f5e5e] leading-[1.1] mb-6">
                Bridging Technology and <br /> Professional Healthcare
              </h1>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                At Dr. Basiouny Pharmacy, we don't just provide medicine; we offer a tech-driven healthcare experience. By integrating advanced management systems, we ensure that every patient receives accurate, fast, and safe service.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#e6f4f1] p-3 rounded-xl text-[#2d8a8a]">
                  <MdOutlineHealthAndSafety size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1f5e5e]">Safety First</h4>
                  <p className="text-sm text-gray-500">Rigorous drug validation and storage standards.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#e6f4f1] p-3 rounded-xl text-[#2d8a8a]">
                  <HiOutlineLightningBolt size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1f5e5e]">Digital Speed</h4>
                  <p className="text-sm text-gray-500">Fast processing using our smart inventory system.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#e6f4f1] p-3 rounded-xl text-[#2d8a8a]">
                  <FiTarget size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1f5e5e]">Our Mission</h4>
                  <p className="text-sm text-gray-500">Making healthcare accessible for everyone in Tanta.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#e6f4f1] p-3 rounded-xl text-[#2d8a8a]">
                  <MdVerifiedUser size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1f5e5e]">Expert Team</h4>
                  <p className="text-sm text-gray-500">Certified pharmacists guided by professional care.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="bg-[#2d8a8a] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#1f5e5e] transition-all shadow-lg active:scale-95">
                Our Full Story
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}