"use client";
import React from "react";
import { HiKey } from "react-icons/hi";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useRouter } from "next/navigation";

// 1. تحديد الـ Roles كـ Enum لسهولة الصيانة ومنع الأخطاء الإملائية
enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

// 2. الـ Schema مع رسائل خطأ واضحة
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  role: z.nativeEnum(UserRole, {
    error: "Please select a valid role",
  }),
});

// 3. استخراج الـ Types من الـ Schema
type LoginFormInputs = z.infer<typeof loginSchema>;

export default function Loginform() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  // 4. إعداد الفورم مع تحديد النوع و Default Values
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      role: undefined, // لضمان إجبار المستخدم على الاختيار
    },
  });

  // 5. دالة التحقق مع استخدام SubmitHandler لضمان الـ Types
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    // حسابات النظام الثابتة (يفضل مستقبلاً تكون في Environment Variables)
    const ADMIN_CRED = { user: "mahmoudhamdi", pass: "Admin@123" };
    const USER_CRED = { user: "joo", pass: "User@123" };

    if (data.role === UserRole.ADMIN) {
      if (data.username === ADMIN_CRED.user && data.password === ADMIN_CRED.pass) {
        toast.success("Welcome back, Boss! Redirecting...");
        router.push("/home");
      } else {
        toast.error("Oops! Admin credentials don't match our records. 🛡️");
      }
    } 
    else if (data.role === UserRole.USER) {
      if (data.username === USER_CRED.user && data.password === USER_CRED.pass) {
        toast.success("Login Successful! Opening Pharmacist Dashboard...");
        router.push("/PharmacistPage");
      } else {
        toast.error("Hey! Check your username or password again. 💊");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-5">
      {/* Username Field */}
      <div className="relative">
        <input
          {...register("username")}
          type="text"
          placeholder="USERNAME"
          className={`w-full border-2 rounded-sm py-3 px-4 outline-none transition-all font-bold text-sm tracking-widest placeholder:text-gray-400 uppercase ${
            errors.username ? "border-red-500" : "border-[#0d7a71]/40 focus:border-[#0d7a71]"
          }`}
        />
        {errors.username && (
          <p className="text-red-500 text-xs mt-1 font-bold animate-pulse">
            {errors.username.message}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="relative group">
        <input
          {...register("password")}
          type={showPassword ? "text" : "password"}
          placeholder="PASSWORD"
          className={`w-full border-2 rounded-sm py-3 px-4 pr-12 outline-none transition-all font-bold text-sm tracking-widest placeholder:text-gray-400 ${
            errors.password ? "border-red-500" : "border-[#0d7a71]/40 focus:border-[#0d7a71]"
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0d7a71] p-1 transition-colors"
        >
          {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
        </button>
        {errors.password && (
          <p className="text-red-500 text-xs mt-1 font-bold animate-pulse">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Role Selection Field */}
      <div className="relative">
        <select
          {...register("role")}
          className={`w-full border-2 rounded-sm py-3 px-4 outline-none transition-all font-bold text-sm tracking-widest appearance-none bg-white cursor-pointer ${
            errors.role ? "border-red-500" : "border-[#0d7a71]/40 focus:border-[#0d7a71]"
          }`}
        >
          <option value="" disabled>SELECT ROLE</option>
          <option value={UserRole.ADMIN}>ADMIN (Manager)</option>
          <option value={UserRole.USER}>USER (Pharmacist)</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#0d7a71]">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
        {errors.role && (
          <p className="text-red-500 text-xs mt-1 font-bold animate-pulse">
            {errors.role.message}
          </p>
        )}
      </div>

      <div className="flex justify-between items-center text-[12px] font-bold text-gray-400">
        <label className="flex items-center gap-2 cursor-pointer hover:text-[#0d7a71] transition-colors">
          <input type="checkbox" className="accent-[#0d7a71] w-4 h-4" /> Remember Me
        </label>
     
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-3 bg-[#86d2cc] text-white py-4 rounded-sm font-black text-xl hover:bg-[#0d7a71] transition-all shadow-lg active:scale-95 group"
      >
        <span className="group-hover:rotate-12 transition-transform duration-300">
          <HiKey size={26} />
        </span>
        <span>LOGIN TO SYSTEM</span>
      </button>
    </form>
  );
}