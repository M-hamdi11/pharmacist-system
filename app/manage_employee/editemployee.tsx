"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FiEdit2, FiX } from "react-icons/fi";
import { Employee } from "./addnewemployee";

// 1. استيراد نفس الـ Interface من كومبوننت الإضافة (افترضت المسار هنا)
// لو مش عامله export، اعمله export من Addnewemployee


// 2. تعريف الـ Props للـ Component
interface EditEmployeeProps {
  employeeData: Employee;
  setData: React.Dispatch<React.SetStateAction<Employee[]>>;
}

export default function Editemployee({ employeeData, setData }: EditEmployeeProps) {
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  
  // 3. تحديد نوع الـ State بناءً على الموظف
  const [formData, setFormData] = useState<Employee>(employeeData);

  const toggleModal = () => setModelOpen(!modelOpen);

  // 4. تحديد أنواع الـ Events (التغيير في المدخلات)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 5. تحديد نوع الـ Submit Event
  const handle_edit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // تحديث المصفوفة الأصلية بالبيانات الجديدة
    setData((prev) =>
      prev.map((emp) => (emp.id === formData.id ? formData : emp))
    );
    
    toggleModal();
  };

  return (
    <>
      {/* زرار التعديل */}
      <button
        onClick={toggleModal}
        className="text-blue-500 hover:text-blue-700 transition-all"
        title="Edit Employee"
      >
        <FiEdit2 size={20} />
      </button>

      {/* المودال الروقاني */}
      {modelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all border border-gray-100 animate-in fade-in zoom-in duration-300">
            {/* الهيدر */}
            <div className="bg-slate-50 px-6 py-4 flex justify-between items-center border-b">
              <h3 className="text-lg font-bold text-slate-800">
                تعديل بيانات {employeeData.name}
              </h3>
              <button
                onClick={toggleModal}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* الفورم */}
            <form onSubmit={handle_edit} className="p-6">
              <div className="space-y-4">
                {/* الاسم */}
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
                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                  />
                </div>

                {/* الوظيفة */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    الوظيفة
                  </label>
                  <input
                    type="text"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                  />
                </div>

                {/* صف الشفت والحالة */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      الشيفت
                    </label>
                    <select
                      name="shift"
                      value={formData.shift}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none bg-white cursor-pointer"
                    >
                      <option value="Morning">Morning</option>
                      <option value="Evening">Evening</option>
                      <option value="Night">Night</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      الحالة
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none bg-white cursor-pointer"
                    >
                      <option value="Active">Active</option>
                      <option value="On Leave">On Leave</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* أزرار التحكم */}
              <div className="mt-8 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 shadow-lg shadow-teal-200 transition-all active:scale-[0.98]"
                >
                  حفظ التغييرات
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