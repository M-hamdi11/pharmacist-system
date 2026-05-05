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
  const[search, setSearch] = React.useState('');
  const router=useRouter();
  
const [inventory, setInventory] = React.useState ([
  { id: 1, name: "Panadol Extra", category: "Painkiller", stock: 120, price: "25 EGP" },
  { id: 2, name: "Vitamin C", category: "Supplements", stock: 45, price: "60 EGP" },
  { id: 3, name: "Augmentin 1g", category: "Antibiotic", stock: 15, price: "90 EGP" },
]);
const filteredInventory = inventory.filter((item) =>
  item.name.toLowerCase().includes(search) || 
  item.category.toLowerCase().includes(search) // ضفت لك البحث بالفئة كمان عشان يبقى شغل عالي
);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#e6f4f1] p-10 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div className="flex items-center gap-4">

          <div onClick={() => router.back()}  className="bg-[#2d8a8a] text-white p-2 rounded-full hover:bg-[#1f5e5e] transition">
            <FiArrowLeft size={24} />
          </div>

          <div className="flex items-center gap-2">
           <div className="text-[#2d8a8a]" >
           <MdOutlineInventory2 size={35} />
           </div>
            <h1 className="text-4xl font-bold text-[#2d8a8a]">Inventory Stock</h1>
          </div>
        </div>
         

        <Searchbar setSearch={setSearch}  />
     


      </div>

      {/* Grid of Cards (شكل مختلف عن الجدول للتنويع) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInventory.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#2d8a8a]">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#2d8a8a]">{item.name}</h3>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded uppercase">{item.category}</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-gray-500">In Stock:</span>
              <span className={`font-bold ${item.stock < 20 ? 'text-red-500' : 'text-green-600'}`}>{item.stock} Units</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Price:</span>
              <span className="font-bold">{item.price}</span>
            </div>
            <Updatestock setInventory={setInventory}  medicineToEdit={item} />

          </div>
        ))}
        
        {/* Add New Card */}
        <Addnewcard inventory={inventory} setInventory={setInventory} />


      </div>
    </div>
    </>
  );
}