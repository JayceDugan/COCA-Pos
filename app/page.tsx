"use client";

import Logo from "@/app/Logo";
import LoginForm from "@/components/loginForm";
import { currentUserIsAuthenticated } from "@/data-access/redux/features/currentUser/currentUser";
import { useAppSelector } from "@/data-access/redux/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage: React.FC = () => {
  const router = useRouter();

  if (useAppSelector(currentUserIsAuthenticated)) router.push('/dashboard/coffee')

  return (
    <div className="relative min-h-screen w-screen">
      <Image
        src="https://plus.unsplash.com/premium_photo-1663852297801-d277b7af6594?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="Unsplash"
        placeholder="blur"
        fill={true}
        blurDataURL={"data:image/jpeg"}
        style={{ objectFit: 'cover' }}
        className="absolute t-0 b-0 l-0 r-0 -z-10"
      />

      <div className="rounded-2xl w-screen z-10 p-5 max-w-full w-[619px] min-h-screen flex">
        <div className="bg-white rounded-2xl py-14 px-6 md:p-14 min-h-full max-w-full">
          <div className="flex items-center justify-center gap-3 mb-8 md:mb-32">
            <Logo />
            <h1 className="text-3xl font-bold">Coca</h1>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
