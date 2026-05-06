'use client';
import React from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiPlus, FiSearch } from "react-icons/fi";
import { MdOutlineInventory2 } from "react-icons/md";
import Updatestock from './updatestock';
import Addnewcard from './addnewcard';
import Searchbar from './search';
import { useRouter } from 'next/navigation';
import Navbar from '../_components/Navbar';

export default function ManageInventory() {
  const [search, setSearch] = React.useState('');
  const router = useRouter();

  const [inventory, setInventory] = React.useState([
    { id: 1, name: "Panadol Extra", category: "Painkiller", stock: 120, price: "25 EGP" },
    { id: 2, name: "Vitamin C", category: "Supplements", stock: 45, price: "60 EGP" },
    { id: 3, name: "Augmentin 1g", category: "Antibiotic", stock: 15, price: "90 EGP" },
  ]);

  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      {/* Container: p-4 for mobile, p-10 for desktop */}
      <div className="min-h-screen bg-[#e6f4f1] p-4 md:p-10 font-sans">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-6">
          
          {/* Title and Back Button */}
          <div className="flex items-center justify-between w-full lg:w-auto gap-4">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => router.back()} 
                className="bg-[#2d8a8a] text-white p-2 md:p-3 rounded-full hover:bg-[#1f5e5e] transition shadow-md"
                aria-label="Go back"
              >
                <FiArrowLeft size={20} className="md:w-6 md:h-6" />
              </button>
              
              <div className="flex items-center gap-2">
                <MdOutlineInventory2 className="text-[#2d8a8a] text-3xl md:text-4xl" />
                <h1 className="text-2xl md:text-4xl font-bold text-[#2d8a8a] whitespace-nowrap">
                  Inventory Stock
                </h1>
              </div>
            </div>
          </div>

          {/* Search Bar: Full width on mobile */}
          <div className="w-full lg:w-1/3">
            <Searchbar setSearch={setSearch} />
          </div>
        </div>

        {/* Grid System: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredInventory.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-5 md:p-6 rounded-2xl shadow-md border-t-4 border-[#2d8a8a] hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg md:text-xl font-bold text-[#2d8a8a] truncate mr-2">
                  {item.name}
                </h3>
                <span className="text-[10px] md:text-xs bg-gray-100 px-2 py-1 rounded-md uppercase font-semibold text-gray-600">
                  {item.category}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">In Stock:</span>
                  <span className={`font-bold ${item.stock < 20 ? 'text-red-500' : 'text-green-600'}`}>
                    {item.stock} Units
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Price:</span>
                  <span className="font-bold text-gray-800">{item.price}</span>
                </div>
              </div>

              <div className="mt-6">
                <Updatestock setInventory={setInventory} medicineToEdit={item} />
              </div>
            </div>
          ))}
          
          {/* Add New Card Component */}
          <div className="h-full min-h-[200px]">
            <Addnewcard inventory={inventory} setInventory={setInventory} />
          </div>
        </div>

        {/* Empty State (Bonus) */}
        {filteredInventory.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No medicines found matching your search.</p>
          </div>
        )}
      </div>
    </>
  );
}