"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FiPlus, FiX } from "react-icons/fi";

// 1. تعريف شكل بيانات الموظف
export interface Employee {
  id: number;
  name: string;
  role: string;
  shift: "Morning" | "Evening" | "Night";
  status: "Active" | "On Leave" | "Inactive";
}

// 2. تعريف الـ Props اللي الكومبوننت بيستقبلها
interface AddNewEmployeeProps {
  setData: React.Dispatch<React.SetStateAction<Employee[]>>;
}

export default function Addnewemployee({ setData }: AddNewEmployeeProps) {
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  
  // 3. تحديد نوع الـ Form State
  const [formData, setFormData] = useState<Omit<Employee, "id">>({
    name: "",
    role: "",
    shift: "Morning",
    status: "Active",
  });

  const toggleModal = () => setModelOpen(!modelOpen);

  // 4. تحديد أنواع الـ Events (التغيير في المدخلات)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 5. تحديد نوع الـ Submit Event
  const handle_add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // إضافة الموظف الجديد مع ID فريد
    setData((prev) => [
      ...prev,
      { ...formData, id: Date.now() } as Employee,
    ]);

    // تصفير الفورم وقفل المودال
    setFormData({ name: "", role: "", shift: "Morning", status: "Active" });
    toggleModal();
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-[#2d8a8a] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#1f5e5e] transition shadow-md"
      >
        <FiPlus /> Add New Employee
      </button>

      {modelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-slate-50 px-6 py-4 flex justify-between items-center border-b">
              <h3 className="text-lg font-bold text-[#2d8a8a]">
                إضافة موظف جديد
              </h3>
              <button
                onClick={toggleModal}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>

            <form onSubmit={handle_add} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    الاسم بالكامل
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    الوظيفة
                  </label>
                  <select
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none bg-white cursor-pointer transition-all"
                  >
                    <option value="" disabled>اختر الوظيفة</option>
                    <option value="Pharmacist">Pharmacist</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">الشيفت</label>
                    <select
                      name="shift"
                      value={formData.shift}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                    >
                      <option value="Morning">Morning</option>
                      <option value="Evening">Evening</option>
                      <option value="Night">Night</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">الحالة</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                    >
                      <option value="Active">Active</option>
                      <option value="On Leave">On Leave</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 shadow-lg shadow-teal-200 transition-all active:scale-[0.98]"
                >
                  إضافة الموظف
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
