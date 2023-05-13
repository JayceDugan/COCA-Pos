"use client";

import Input, { InputSize } from "@/app/Input";
import { UserIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion';
import Link from "next/link";
import React from "react";
import { FieldValues, useForm } from 'react-hook-form';

interface LoginFormValues extends FieldValues {
  Username: string,
  Password: string
}

const LoginForm: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginFormValues>({
    defaultValues: {
      Username: '',
      Password: ''
    }
  });

  return (
    <section>
      <h3 className="text-2xl font-semibold text-center mb-4">Login form</h3>
      <p className="text-slate-400 text-center leading-5 md:leading-8 text-md md:text-xl max-w-full w-[443px] mx-auto font-light">Lorem Ipsum has been the industry's standard dummy text ever since.</p>

      <form className="mt-8">
        <Input<LoginFormValues>
          label={"Username"}
          register={register}
          required={true}
          size={InputSize.md}
          icon={<UserIcon className="h-5 w-5 text-black" aria-hidden="true" />}
          placeholder="Enter username"
        />

        <Input<LoginFormValues>
          label={"Password"}
          register={register}
          required={true}
          size={InputSize.md}
          icon={<LockClosedIcon className="h-5 w-5 text-black" aria-hidden="true" />}
          placeholder={"Enter password"}
        />

        <Link
          href={"/forgot-password"}
          className="text-orange-500 font-semibold inline-block mb-8 text-sm"
        >
          Forgot password?
        </Link>

        <motion.input
          type="submit"
          className="block w-full bg-orange-500 py-4 px-10 rounded-full text-white font-bold md:mb-32 mb-10 hover:cursor-pointer hover:shadow-2xl transition-shadow"
          value="Running order"
          whileTap={{
            scale: 0.9
          }}
        />

        <Link
          href={"/end-user-agreement"}
          className="text-slate-400 text-center w-full mx-auto block"
        >
          End user agreement
        </Link>
      </form>
    </section>
  )
}

export default LoginForm;
