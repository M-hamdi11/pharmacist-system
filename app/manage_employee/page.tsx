'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft } from "react-icons/fi";
import Deleteemployee from './deleteemployee';
import Editemployee from './editemployee';
import Addnewemployee from './addnewemployee';

// 1. استيراد النوع الموحد للموظف
import type { Employee } from './addnewemployee';

export default function ManageEmployee() {
  const [data, setData] = useState<Employee[]>([
    { id: 1, name: "Ahmed Mohamed", role: "Pharmacist", status: "Active", shift: "Morning" },
    { id: 2, name: "Sara Ali", role: "Pharmacist", status: "Active", shift: "Evening" },
    { id: 3, name: "Mona Hassan", role: "Manager", status: "On Leave", shift: "Morning" },
  ]);

  const deleteRow = (id: number | string) => {
    setData((prev) => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#e6f4f1] p-4 md:p-10 font-sans">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <Link href="/home" className="bg-[#2d8a8a] text-white p-2 rounded-full hover:bg-[#1f5e5e] transition shadow-md">
            <FiArrowLeft size={20} className="md:w-6 md:h-6" />
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold text-[#2d8a8a]">Manage Employees</h1>
        </div>
        
        <div className="w-full sm:w-auto">
          <Addnewemployee setData={setData} />
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Desktop View (Table) - Hidden on mobile */}
        <div className="hidden md:block">
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
                      <StatusBadge status={emp.status} />
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center items-center gap-3">
                        <Editemployee setData={setData} employeeData={emp} />
                        <Deleteemployee employeeId={emp.id} onDelete={deleteRow} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <EmptyState />
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile View (Cards) - Hidden on desktop */}
        <div className="md:hidden divide-y divide-gray-100 text-[#2d8a8a]">
          {data.length > 0 ? (
            data.map((emp) => (
              <div key={emp.id} className="p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{emp.name}</h3>
                    <p className="text-sm opacity-80">{emp.role}</p>
                  </div>
                  <StatusBadge status={emp.status} />
                </div>
                
                <div className="flex justify-between items-center bg-gray-50 p-2 rounded-lg text-sm">
                  <span>Shift: <span className="font-medium">{emp.shift}</span></span>
                  <div className="flex gap-2">
                    <Editemployee setData={setData} employeeData={emp} />
                    <Deleteemployee employeeId={emp.id} onDelete={deleteRow} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-10"><EmptyState /></div>
          )}
        </div>
      </div>
    </div>
  );
}

// مكون فرعي لشارة الحالة لتقليل تكرار الكود
function StatusBadge({ status }: { status: string }) {
  const styles: any = {
    'Active': 'bg-green-100 text-green-700',
    'On Leave': 'bg-orange-100 text-orange-700',
    'Inactive': 'bg-red-100 text-red-700'
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${styles[status] || 'bg-gray-100'}`}>
      {status}
    </span>
  );
}

// مكون فرعي للحالة الفارغة
function EmptyState() {
  return (
    <div className="p-10 text-center text-gray-400 font-medium">
      No employees found. Start by adding one!
    </div>
  );
}