"use client";
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import Swal from 'sweetalert2';

export default function Deleteemployee({ employeeId, onDelete }) {
  
  const handle_delete = () => {
    Swal.fire({
      title: 'هل أنت متأكد؟',
      text: "لن تتمكن من التراجع عن هذا الإجراء!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2d8a8a', // لون الهيدر بتاع الجدول عندك
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم، احذفه!',
      cancelButtonText: 'إلغاء',
      reverseButtons: true, // عشان يخلي "تأكيد" على اليمين و "إلغاء" على الشمال
      background: '#fff',
      border: 'none',
      customClass: {
        popup: 'rounded-2xl', // عشان يبقى واخد نفس روح المودال
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
          timer: 1500 // يختفي لوحده بعد ثانية ونصف
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