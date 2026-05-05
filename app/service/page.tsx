'use client';
import React from 'react';
import { 
  MdMedicalServices, 
  MdOutlineLocalPharmacy, 
  MdSpeed, 
  MdHealthAndSafety 
} from "react-icons/md";
import { FaMicroscope, FaTruckLoading } from "react-icons/fa";
import Navbar from '../_components/Navbar';

// المصفوفة اللي فيها البيانات عشان الكود يفضل Clean زي ما بتحب
const services = [
  {
    title: "Prescription Management",
    description: "Efficiently track and manage patient prescriptions with our integrated digital system.",
    icon: <MdOutlineLocalPharmacy size={40} />,
  },
  {
    title: "Inventory Analytics",
    description: "Real-time monitoring of medicine stock levels with smart low-stock alerts.",
    icon: <MdMedicalServices size={40} />,
  },
  {
    title: "Fast Delivery Tracking",
    description: "Seamless logistics management to ensure medicines reach patients on time.",
    icon: <FaTruckLoading size={40} />,
  },
  {
    title: "Health Consulting",
    description: "Professional digital tools to assist pharmacists in providing accurate health advice.",
    icon: <MdHealthAndSafety size={40} />,
  },
  {
    title: "Laboratory Integration",
    description: "Connect with lab results directly to ensure the right medication for every case.",
    icon: <FaMicroscope size={40} />,
  },
  {
    title: "Automated Reporting",
    description: "Generate detailed daily and monthly sales reports with just one click.",
    icon: <MdSpeed size={40} />,
  }
];

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-[#f8fbfa] font-sans">
      <Navbar />

      <section className="py-24 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2d8a8a]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2d8a8a]/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Header Section with 3D Pharmacy Symbol */}
          <div className="flex flex-col items-center text-center mb-20">
            <div className="relative mb-8 group">
              {/* صورة ثعبان الصيدلية (Medical Symbol) الـ 3D وشغالة فوراً */}
              <img 
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Medical%20Symbol.png" 
                alt="Pharmacy 3D Symbol" 
                className="w-44 h-44 object-contain drop-shadow-[0_25px_35px_rgba(45,138,138,0.3)] animate-float"
              />
              <div className="absolute inset-0 bg-[#2d8a8a]/20 blur-[100px] rounded-full -z-10 scale-125"></div>
            </div>

            <h2 className="text-[#2d8a8a] text-sm font-black tracking-[0.4em] uppercase mb-4">
              Our Professional Services
            </h2>
            <h1 className="text-5xl lg:text-7xl font-black text-[#1f5e5e] leading-tight mb-6">
              Modern Solutions for <br /> 
              <span className="text-[#2d8a8a]">Dr. Basiouny Pharmacy</span>
            </h1>
            <div className="w-32 h-2 bg-[#2d8a8a] rounded-full opacity-20"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-12 rounded-[50px] shadow-[0_15px_50px_rgba(0,0,0,0.02)] border border-transparent hover:border-[#2d8a8a]/30 hover:shadow-[0_30px_60px_rgba(45,138,138,0.12)] transition-all duration-500 group text-left relative overflow-hidden"
              >
                {/* Icon Container */}
                <div className="bg-[#e6f4f1] text-[#2d8a8a] w-24 h-24 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-[#2d8a8a] group-hover:text-white group-hover:rotate-[10deg] transition-all duration-500 shadow-sm">
                  {service.icon}
                </div>

                <h3 className="text-3xl font-black text-[#1f5e5e] mb-5 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 font-bold text-lg leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>

                {/* Bottom Action */}
                <div className="flex items-center gap-2 text-[#2d8a8a] font-black text-sm uppercase tracking-widest cursor-pointer group/btn">
                  <span className="group-hover/btn:mr-2 transition-all duration-300">Explore Detail</span>
                  <span className="text-2xl transition-all duration-300 transform group-hover/btn:translate-x-2">→</span>
                </div>

                {/* Decorative background shape per card */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#2d8a8a]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animation Global Styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(4deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}