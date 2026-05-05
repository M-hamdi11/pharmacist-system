"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FiEdit2, FiX } from "react-icons/fi";
import { Product } from "./addnewcard";

// 1. استيراد النوع الموحد للمنتج (تأكد من صحة المسار لـ Addnewcard)


// 2. تعريف الـ Props للكومبوننت
interface UpdateStockProps {
  setInventory: React.Dispatch<React.SetStateAction<Product[]>>;
  medicineToEdit: Product; // الدواء المراد تعديله
}

export default function Updatestock({ setInventory, medicineToEdit }: UpdateStockProps) {
  const [modalopen, setModalopen] = useState<boolean>(false);
  
  // 3. تجهيز الـ State ببيانات الدواء الحالي مع تحديد النوع
  const [formData, setFormData] = useState<Product>(medicineToEdit);

  const toggleModal = () => setModalopen(!modalopen);

  // 4. معالجة التغيير في المدخلات بشكل منظم
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "stock" ? Number(value) : value,
    }));
  };

  // 5. معالجة الـ Submit مع تحديد نوع الـ Event
  const handle_update = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // تحديث المصفوفة الأصلية بالبيانات الجديدة
    setInventory((prev) => 
      prev.map((item) => 
        item.id === formData.id ? formData : item 
      )
    );
    
    toggleModal();
  };

  return (
    <>
      {/* زرار التعديل */}
      <button 
        onClick={() => setModalopen(true)} 
        className="text-[#2d8a8a] hover:text-[#1f5e5e] p-2 rounded-lg transition-colors group"
        title="تعديل بيانات الدواء"
      >
        <span className="transition-transform duration-200 transform rotate-0">
          <FiEdit2 size={20} />
        </span>
      </button>

      {/* المودال */}
      {modalopen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md relative shadow-2xl border border-gray-100">
            {/* زرار الإغلاق */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
            >
              <FiX size={24} />
            </button>
            
            <h3 className="font-bold text-xl text-[#2d8a8a] mb-6">تعديل بيانات الدواء</h3>
            
            <form onSubmit={handle_update} className="flex flex-col gap-4">
              {/* الاسم */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-600 px-1">اسم الدواء</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-[#2d8a8a] transition-all" 
                />
              </div>
              
              {/* الفئة */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-600 px-1">الفئة (Category)</label>
                <input 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-[#2d8a8a] transition-all" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {/* الكمية */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-600 px-1">الكمية في المخزن</label>
                  <input 
                    name="stock"
                    type="number"
                    min="0"
                    value={formData.stock}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-[#2d8a8a] transition-all" 
                  />
                </div>
                
                {/* السعر */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-600 px-1">السعر</label>
                  <input 
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-[#2d8a8a] transition-all" 
                  />
                </div>
              </div>

              {/* أزرار التحكم */}
              <div className="mt-8 flex flex-col gap-2">
                <button 
                  type="submit" 
                  className="w-full py-3 bg-[#2d8a8a] text-white rounded-xl font-bold hover:bg-[#1f5e5e] shadow-lg shadow-teal-100 transition-all active:scale-[0.98]"
                >
                  حفظ التعديلات
                </button>
                <button 
                  type="button" 
                  onClick={toggleModal} 
                  className="w-full py-3 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-all"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}