"use client";
import React, { useState } from 'react';

export default function Updatestock({ setInventory, medicineToEdit }) {
  const [modalopen, setModalopen] = useState(false);
  
  // بنجهز الـ state ببيانات الدواء اللي جاي عشان نعدل عليه
  const [formData, setFormData] = useState(medicineToEdit);

  const handle_update = (e) => {
    e.preventDefault();
    
    // بنحدث الداتا في الـ Inventory
    setInventory((prev) => 
      prev.map((item) => 
        item.id === formData.id ? formData : item 
      )
    );
    
    setModalopen(false);
  };

  return (
    <>
      <button onClick={() => setModalopen(true)} className="bg-[#2d8a8a] text-white p-2 rounded">
        تعديل الدواء
      </button>

      {modalopen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-sm">
            <h3 className="font-bold mb-4 text-[#2d8a8a]">تعديل بيانات الدواء</h3>
            
            <form onSubmit={handle_update} className="flex flex-col gap-3">
              {/* تعديل الاسم */}
              <input 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="border p-2 rounded" 
              />
              
              {/* تعديل الفئة */}
              <input 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="border p-2 rounded" 
              />
              
              {/* تعديل الكمية */}
              <input 
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({...formData, stock: Number(e.target.value)})}
                className="border p-2 rounded" 
              />
              
              {/* تعديل السعر */}
              <input 
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="border p-2 rounded" 
              />

              <button type="submit" className="bg-[#2d8a8a] text-white py-2 rounded">حفظ التعديلات</button>
              <button type="button" onClick={() => setModalopen(false)} className="text-gray-500">إلغاء</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}