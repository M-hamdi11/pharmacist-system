"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft } from "react-icons/fi";
import Deleteemployee from './deleteemployee';
import Editemployee from './editemployee';
import Addnewemployee from './addnewemployee';

// 1. استيراد النوع الموحد للموظف
import type { Employee } from './addnewemployee';

export default function ManageEmployee() {
  // 2. تعريف الـ State باستخدام النوع Employee
  const [data, setData] = useState<Employee[]>([
    { id: 1, name: "Ahmed Mohamed", role: "Pharmacist", status: "Active", shift: "Morning" },
    { id: 2, name: "Sara Ali", role: "Pharmacist", status: "Active", shift: "Evening" },
    { id: 3, name: "Mona Hassan", role: "Manager", status: "On Leave", shift: "Morning" },
  ]);

  // 3. تحديد نوع الـ ID في فانكشن المسح
  const deleteRow = (id: number | string) => {
    setData((prev) => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#e6f4f1] p-10 font-sans">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <Link href="/home" className="bg-[#2d8a8a] text-white p-2 rounded-full hover:bg-[#1f5e5e] transition shadow-md">
            <FiArrowLeft size={24} />
          </Link>
          <h1 className="text-4xl font-bold text-[#2d8a8a]">Manage Employees</h1>
        </div>
        
        {/* كومبوننت الإضافة */}
        <Addnewemployee setData={setData} />
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <table className="w-full text-left">
          <thead className="bg-[#2d8a8a] text-white">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Role</th>
              <th className="p-4">Shift</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[#2d8a8a]">
            {data.length > 0 ? (
              data.map((emp) => (
                <tr key={emp.id} className="border-b border-gray-100 hover:bg-[#f0f9f8] transition-colors">
                  <td className="p-4 font-semibold">{emp.name}</td>
                  <td className="p-4">{emp.role}</td>
                  <td className="p-4">{emp.shift}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      emp.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : emp.status === 'On Leave'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center items-center gap-3">
                      {/* كومبوننت التعديل */}
                      <Editemployee setData={setData} employeeData={emp} />
                      
                      {/* كومبوننت الحذف */}
                      <Deleteemployee employeeId={emp.id} onDelete={deleteRow} />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-10 text-center text-gray-400 font-medium">
                  No employees found. Start by adding one!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}