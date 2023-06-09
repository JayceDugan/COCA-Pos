"use client";

import Input, { InputSize } from "@/app/Input";
import {
  setCurrentUserAuthenticated,
  setCurrentUserUsername
} from "@/data-access/redux/features/currentUser/currentUser";
import { useAppDispatch } from "@/data-access/redux/hooks";
import { UserIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion';
import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface LoginFormValues extends FieldValues {
  Username: string,
  Password: string
}

const LoginForm: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors, isDirty, isValid, isSubmitting } } = useForm<LoginFormValues>({
    defaultValues: {
      Username: '',
      Password: ''
    }
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<LoginFormValues> = data => {
    return new Promise((resolve) => {
      dispatch(setCurrentUserUsername(data.Username));
      dispatch(setCurrentUserAuthenticated(true));

      router.push('/dashboard/coffee');
    })
  }
  const ValidationErrorMessage: React.FC = () => <span className="text-xs text-red-500 block mt-3">* This field is required.</span>

  return (
    <section>
      <h3 className="text-2xl font-semibold text-center mb-2">Login form</h3>
      <p className="text-slate-400 text-center leading-5 md:leading-6 text-sm max-w-full w-[443px] mx-auto font-light">Lorem Ipsum has been the industry's standard dummy text ever since.</p>

      <form
        className="mt-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input<LoginFormValues>
          label={"Username"}
          register={register}
          required={true}
          size={InputSize.md}
          icon={<UserIcon className="h-5 w-5" aria-hidden="true" />}
          placeholder="Enter username"
          isInvalid={Boolean(errors?.Username)}
        />
         { errors.Username && <ValidationErrorMessage />}

        <Input<LoginFormValues>
          label={"Password"}
          register={register}
          required={true}
          size={InputSize.md}
          icon={<LockClosedIcon className="h-5 w-5" aria-hidden="true" />}
          placeholder={"Enter password"}
          isInvalid={Boolean(errors?.Password)}
        />
        { errors.Password && <ValidationErrorMessage />}

        <Link
          href={"/forgot-password"}
          className="text-orange-500 font-semibold inline-block mb-8 text-sm mt-5"
        >
          Forgot password?
        </Link>

        <motion.button
          type="submit"
          disabled={!isDirty || !isValid}
          className="block w-full bg-orange-500 py-4 px-10 rounded-full text-white font-bold md:mb-32 mb-10 hover:cursor-pointer hover:shadow-2xl disabled:bg-gray-300 transition-all duration-100"
          whileTap={{
            scale: 0.9
          }}
        >
          {isSubmitting ? '...' : 'Login'}
        </motion.button>

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
