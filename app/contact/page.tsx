'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { MdSend, MdTagFaces } from "react-icons/md";
import { toast } from 'react-toastify';
import Navbar from '../_components/Navbar';

const contactSchema = z.object({
  name: z.string().min(2, "الاسم قصير شوية يا ريس"),
  email: z.string().email("الايميل ده مش مظبوط"),
  message: z.string().min(5, "قولنا أي حاجة مفيدة!"),
});

type ContactInputs = z.infer<typeof contactSchema>;

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactInputs) => {
    toast.success("وصلت يا دكتور! هنكلمك أكيد.");
    reset();
  };

  return (
    <>
    <Navbar/>
    <section className="min-h-screen bg-[#e6f4f1] py-20 px-6 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* الصورة الروشة: واضحة وبحواف صايعة */}
          <div className="flex-1 relative group mt-10 lg:mt-0">
            {/* إطار خلفي للديكور */}
            <div className="absolute -inset-4 bg-[#2d8a8a] rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20"></div>
            
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-[12px] border-white shadow-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:-rotate-2">
              <img 
                src="/WhatsApp Image 2026-05-06 at 1.39.58 AM.jpeg" 
                alt="الشباب الروشة" 
                className="w-full h-auto object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay خفيف بيظهر وقت الهوفر */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f5e5e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-black text-2xl italic">Our Legends! 🔥</p>
              </div>
            </div>

            {/* Badge مضحك */}
            <div className="absolute -top-8 -right-8 bg-yellow-400 text-[#1f5e5e] p-6 rounded-full shadow-xl z-20 animate-bounce font-black flex flex-col items-center rotate-12">
              <MdTagFaces size={30} />
              <span className="text-xs uppercase tracking-tighter">Approved By Groups</span>
            </div>
          </div>

          {/* سكشن الفورم */}
          <div className="flex-1 w-full relative">
            <div className="bg-white/80 backdrop-blur-md p-10 lg:p-14 rounded-[3.5rem] shadow-2xl border border-white/50 relative z-10">
              <div className="mb-10 text-center lg:text-left">
                <h2 className="text-[#2d8a8a] font-bold tracking-[0.4em] uppercase text-sm mb-2">Get in touch</h2>
                <h1 className="text-5xl font-black text-[#1f5e5e] leading-tight">كلم فريق <br/> الروشنة</h1>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="group">
                  <input 
                    {...register("name")}
                    placeholder="أسمك الكريم"
                    className="w-full bg-white border-2 border-[#e6f4f1] focus:border-[#2d8a8a] rounded-2xl py-4 px-6 outline-none transition-all font-bold text-[#1f5e5e] placeholder:text-gray-300 shadow-sm"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-2 font-bold px-2">{errors.name.message}</p>}
                </div>

                <div className="group">
                  <input 
                    {...register("email")}
                    placeholder="إيميلك عشان نرد عليك"
                    className="w-full bg-white border-2 border-[#e6f4f1] focus:border-[#2d8a8a] rounded-2xl py-4 px-6 outline-none transition-all font-bold text-[#1f5e5e] placeholder:text-gray-300 shadow-sm"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-2 font-bold px-2">{errors.email.message}</p>}
                </div>

                <div className="group">
                  <textarea 
                    {...register("message")}
                    placeholder="أكتب رسالتك هنا يا دكتور..."
                    rows={3}
                    className="w-full bg-white border-2 border-[#e6f4f1] focus:border-[#2d8a8a] rounded-2xl py-4 px-6 outline-none transition-all font-bold text-[#1f5e5e] placeholder:text-gray-300 shadow-sm resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-2 font-bold px-2">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#1f5e5e] text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-[#2d8a8a] hover:shadow-[0_15px_30px_rgba(45,138,138,0.3)] transition-all active:scale-95 group shadow-lg"
                >
                  <span>ابعت للرجالة</span>
                  <MdSend size={24} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
            
            {/* شكل ديكوري خلف الفورم */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[110%] bg-[#2d8a8a]/5 -rotate-2 rounded-[4rem] -z-10"></div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}