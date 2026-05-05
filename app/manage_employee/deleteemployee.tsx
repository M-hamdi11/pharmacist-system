"use client";
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import Swal from 'sweetalert2';

// 1. تعريف الـ Props للـ Component
interface DeleteEmployeeProps {
  employeeId: number | string; // حسب نوع الـ ID اللي مستخدمه في السيستم عندك
  onDelete: (id: number | string) => void; // دالة بترجع الـ ID للـ Parent لتنفيذ الحذف
}

export default function Deleteemployee({ employeeId, onDelete }: DeleteEmployeeProps) {
  
  const handle_delete = (): void => {
    Swal.fire({
      title: 'هل أنت متأكد؟',
      text: "لن تتمكن من التراجع عن هذا الإجراء!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2d8a8a', 
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم، احذفه!',
      cancelButtonText: 'إلغاء',
      reverseButtons: true, 
      background: '#fff',
      customClass: {
        popup: 'rounded-2xl', 
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // تنفيذ عملية الحذف
        onDelete(employeeId);

        // إظهار رسالة نجاح
        Swal.fire({
          title: 'تم الحذف!',
          text: 'تم إزالة الموظف بنجاح.',
          icon: 'success',
          confirmButtonColor: '#2d8a8a',
          timer: 1500 
        });
      }
    });
  };

  return (
    <button 
      onClick={handle_delete} 
      className="text-red-500 hover:text-red-700 transition-colors p-1"
      title="Delete Employee"
    >
      <FiTrash2 size={20} />
    </button>
  );
}