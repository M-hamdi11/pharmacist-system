import React from 'react';
import { MdOutlineInventory2, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-10 mb-12">
          
          {/* Brand Section */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 text-[#2d8a8a] mb-6">
              <MdOutlineInventory2 size={35} />
              <div className="font-bold text-lg leading-tight uppercase tracking-tighter">
                Dr. Basiouny <br /> <span className="text-sm font-medium text-gray-500">Pharmacy</span>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6 font-medium">
              Providing professional healthcare services and medicine management with accuracy and care since 2026.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#e6f4f1] text-[#2d8a8a] flex items-center justify-center hover:bg-[#2d8a8a] hover:text-white transition-all shadow-sm">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#e6f4f1] text-[#2d8a8a] flex items-center justify-center hover:bg-[#2d8a8a] hover:text-white transition-all shadow-sm">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#e6f4f1] text-[#2d8a8a] flex items-center justify-center hover:bg-[#2d8a8a] hover:text-white transition-all shadow-sm">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#2d8a8a] font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-600 font-medium">
            <li><Link href="/service" className="hover:text-[#2d8a8a] transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-[#2d8a8a] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#2d8a8a] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#2d8a8a] font-bold text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li className="flex items-center gap-3">
                <span className="text-[#2d8a8a]"><MdLocationOn size={22} /></span>
                <span>Tanta, Gharbia Governorate, Egypt</span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone color="#2d8a8a" size={22} />
                <span>+20 1023250996</span>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail color="#2d8a8a" size={22} />
                <span>info@basiouny-pharmacy.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 font-bold text-sm uppercase tracking-widest">
          <p>© 2026 Dr. Basiouny Pharmacy. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#2d8a8a] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#2d8a8a] cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}