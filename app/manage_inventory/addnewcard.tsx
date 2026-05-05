"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FiPlus, FiX } from "react-icons/fi";

// 1. تعريف شكل المنتج في المخزن
export interface Product {
  id: number;
  name: string;
  category: string;
  stock: number;
  price: string;
}

// 2. تعريف الـ Props للكومبوننت
interface AddNewCardProps {
  inventory: Product[];
  setInventory: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function Addnewcard({ inventory, setInventory }: AddNewCardProps) {
  const [modalopen, setModalopen] = useState<boolean>(false);
  
  // 3. تعريف الـ Form State بدون الـ ID في البداية
  const [formData, setFormData] = useState<Omit<Product, "id">>({
    name: "",
    category: "",
    stock: 0,
    price: "",
  });

  // دالة لتغيير المدخلات بشكل منظم
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "stock" ? Number(value) : value,
    }));
  };

  const handle_submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // التأكد من عدم وجود منتج بنفس الاسم (Case-insensitive)
    const existingProduct = inventory.find(
      (item) => item.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (existingProduct) {
      // تحديث المنتج الحالي
      setInventory((prev) =>
        prev.map((item) =>
          item.id === existingProduct.id ? { ...formData, id: item.id } : item
        )
      );
    } else {
      // إضافة منتج جديد
      setInventory((prev) => [...prev, { ...formData, id: Date.now() }]);
    }

    setModalopen(false);
    setFormData({ name: "", category: "", stock: 0, price: "" }); 
  };

  return (
    <>
      {/* الكارت اللي بيدوس عليه عشان يفتح */}
      <div
        onClick={() => setModalopen(true)}
        className="border-2 border-dashed border-[#2d8a8a]/40 rounded-2xl flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-white/50 transition-all hover:border-[#2d8a8a] group"
      >
        <div className="text-[#2d8a8a] mb-2 group-hover:scale-110 transition-transform">
          <FiPlus size={40} />
        </div>
        <p className="font-bold text-[#2d8a8a]">Add New Product</p>
      </div>

      {/* المودال */}
      {modalopen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md relative shadow-2xl">
            <button
              onClick={() => setModalopen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
            >
              <FiX size={24} />
            </button>
            <h3 className="font-bold text-xl text-[#2d8a8a] mb-6">بيانات المنتج الجديد</h3>

            <form onSubmit={handle_submit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-600 px-1">اسم الدواء</label>
                <input
                  name="name"
                  placeholder="Ex: Panadol"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-[#2d8a8a] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-600 px-1">الفئة</label>
                <input
                  name="category"
                  placeholder="Ex: Analgesic"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-[#2d8a8a] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-600 px-1">الكمية</label>
                  <input
                    name="stock"
                    type="number"
                    min="0"
                    required
                    value={formData.stock}
                    onChange={handleChange}
                    className="border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-[#2d8a8a] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-600 px-1">السعر</label>
                  <input
                    name="price"
                    placeholder="Ex: 50 EGP"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    className="border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-[#2d8a8a] transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#2d8a8a] text-white py-4 rounded-xl font-bold mt-4 hover:bg-[#1f5e5e] transition-all active:scale-[0.98] shadow-lg shadow-teal-100"
              >
                حفظ في المخزن
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}