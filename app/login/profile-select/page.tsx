"use client";

import ProfilesSlider from "@/app/login/profile-select/profilesSlider";
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from "next/image";
import React, { useState } from "react";

const Page: React.FC = () => {
  return (
    <motion.div className="relative min-h-screen w-screen">
      <Image
        src="https://plus.unsplash.com/premium_photo-1663852297801-d277b7af6594?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="Unsplash"
        placeholder="blur"
        fill={true}
        blurDataURL={"data:image/jpeg"}
        style={{ objectFit: 'cover' }}
        className="absolute t-0 b-0 l-0 r-0 -z-20 pointer-events-none"
      />

      <motion.div className="bg-black -z-10 absolute top-0 bottom-0 left-0 right-0" />

      <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full">
        <ProfilesSlider />

        <div className="w-[360px] mx-auto max-w-full mt-10">
          <div className="flex items-center justify-between gap-3">
            <button className="bg-orange-500 rounded-2xl text-white text-bold py-2 px-6 w-1/2">Clock in</button>
            <button className="w-1/2 bg-white text-orange-500 rounded-full py-2 px-6">Clock out</button>
          </div>

        </div>

        <button></button>
      </section>
    </motion.div>
  )
}

export default Page;
