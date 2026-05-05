"use client";
import React from "react";
import { RiShieldCheckFill } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Loginform from "./loginform";

const LoginPage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#f8fbfa] flex relative overflow-hidden font-sans">
      {/* 1. Background Pattern & Curve */}
      <div className="absolute inset-0 z-0">
        {/* Pattern خفيف يعطي ملمس طبي للمكان */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>

        {/* المنحنى الأخضر الاحترافي */}
        <div className="absolute right-0 top-0 h-full w-[45%] bg-[#0d7a71] clip-path-my-curve hidden lg:block shadow-2xl">
          <style jsx>{`
            .clip-path-my-curve {
              clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
              background: linear-gradient(145deg, #0d7a71 0%, #12b1a3 100%);
            }
          `}</style>
        </div>
      </div>

      {/* 2. Main Layout Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center z-10 px-8 py-12">
        {/* Left Side: Logo & Form */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-10 lg:pr-12">
          {/* Logo Section */}
          <div className="flex items-start gap-3 bg-white border-2 border-[#0d7a71]/10 p-4 rounded-2xl shadow-sm">
            <div className="bg-[#0d7a71] p-2 rounded-lg text-white">
              <MdOutlineHealthAndSafety size={35} />
            </div>
            <div className="flex flex-col">
              <span className="text-[#0d7a71] text-xs font-bold tracking-tighter uppercase leading-none">
                Dr
              </span>
              <span className="text-[#0d7a71] text-xl font-black tracking-tighter leading-tight uppercase">
                Basiouny
              </span>
              <span className="text-[#0d7a71] text-sm font-bold tracking-[0.2em] leading-none uppercase">
                Pharmacy
              </span>
            </div>
          </div>

          {/* Titles */}
          <div className="space-y-3">
            <h1 className="text-[#0d7a71] text-6xl font-black leading-[1.1] tracking-tight">
              Modern Care, <br />
              <span className="text-[#159a8e] opacity-80">Digital Trust.</span>
            </h1>
            <p className="text-gray-500 font-medium text-lg max-w-md">
              Access your pharmacist dashboard and manage your inventory with
              precision.
            </p>
          </div>

          {/* Login Form Container */}
          <div className="w-full max-w-md">
            <Loginform />
          </div>

          {/* Secure Login Note */}
          <div className="flex items-center gap-3 text-[#0d7a71] bg-white px-6 py-3 rounded-full shadow-sm border border-[#0d7a71]/5 font-bold text-sm">
            <span className="animate-pulse">
              <RiShieldCheckFill size={22} />
            </span>
            <span>Secure Login - Your data is encrypted & protected</span>
          </div>
        </div>

        {/* Right Side: Medical Elements Illustration */}
        <div className="hidden lg:flex w-1/2 h-full justify-center items-center relative">
          <div className="relative z-10 flex flex-col items-center">
            {/* Container للوجو عشان يظهر بشكل 3D شوية */}
            <div className="relative group animate-float">
              {/* التوهج خلف اللوجو */}
              <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-full group-hover:bg-white/30 transition-all duration-700"></div>

              <img
                src="/Logo (1).png"
                alt="Pharmacy Logo"
                className="relative w-[300px] md:w-[400px] h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105"
              />
            </div>

            <style jsx>{`
              @keyframes float {
                0%,
                100% {
                  transform: translateY(0px) rotate(0deg);
                }
                50% {
                  transform: translateY(-25px) rotate(2deg);
                }
              }
              .animate-float {
                animation: float 6s ease-in-out infinite;
              }
            `}</style>
          </div>
          {/* Glow جامد عشان يدي روح للديزاين */}
          <div className="absolute w-[450px] h-[450px] bg-white/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
