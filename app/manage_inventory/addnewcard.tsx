"use client";
import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

export default function Addnewcard({ inventory, setInventory }) {
  const [modalopen, setModalopen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    stock: "",
    price: "",
  });

  const handle_submit = (e) => {
    e.preventDefault();

    // 1. بنشوف هل المنتج ده موجود أصلاً ولا لأ؟
    const existingProduct = inventory.find(
      (item) => item.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (existingProduct) {
      // 2. لو موجود: بنعمل Map ونحدث بياناته هو بس بناءً على الـ ID بتاعه
      setInventory((prev) =>
        prev.map((item) =>
          item.id === existingProduct.id ? { ...formData, id: item.id } : item
        )
      );
    } else {
      // 3. لو مش موجود: بنضيفه كأنه منتج جديد بـ ID جديد
      setInventory((prev) => [...prev, { ...formData, id: Date.now() }]);
    }

    setModalopen(false);
    setFormData({ name: "", category: "", stock: "", price: "" }); // تصفير
  };

  return (
    <>
      {/* الكارت اللي بيدوس عليه عشان يفتح */}
      <div
        onClick={() => setModalopen(true)}
        className="border-2 border-dashed border-[#2d8a8a]/40 rounded-2xl flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-white/50 transition"
      >
        <div className="text-[#2d8a8a] mb-2">
          <FiPlus size={40} />
        </div>
        <p className="font-bold text-[#2d8a8a]">Add New Product</p>
      </div>

      {/* المودال المبسط */}
      {modalopen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl w-full max-w-sm relative">
            <button
              onClick={() => setModalopen(false)}
              className="absolute top-4 right-4 text-gray-400"
            >
              <FiX size={20} />
            </button>
            <h3 className="font-bold text-[#2d8a8a] mb-4">بيانات المنتج</h3>

            <form onSubmit={handle_submit} className="flex flex-col gap-3">
              <input
                placeholder="اسم الدواء"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border p-2 rounded-xl outline-none focus:border-[#2d8a8a]"
              />
              <input
                placeholder="الفئة (Category)"
                required
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="border p-2 rounded-xl outline-none focus:border-[#2d8a8a]"
              />
              <input
                placeholder="الكمية (Stock)"
                type="number"
                required
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: Number(e.target.value) })
                }
                className="border p-2 rounded-xl outline-none focus:border-[#2d8a8a]"
              />
              <input
                placeholder="السعر"
                required
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="border p-2 rounded-xl outline-none focus:border-[#2d8a8a]"
              />

              <button
                type="submit"
                className="bg-[#2d8a8a] text-white py-3 rounded-xl font-bold mt-2"
              >
                حفظ التغييرات
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
