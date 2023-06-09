import { motion } from 'framer-motion'
import { ReactNode, useId } from "react";
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import cx from "classnames";

export enum InputSize {
  lg = 'lg',
  md = 'md'
}

export type InputProps<T extends FieldValues = {}> = {
  label: Path<T>,
  register: UseFormRegister<T>,
  required: boolean,
  size: InputSize,
  placeholder?: string,
  icon?: ReactNode,
  isInvalid?: boolean
}

const Input = <T extends FieldValues = {}>({ label, register, required, icon, size, placeholder, isInvalid }: InputProps<T>) => {
  const id = useId();

  const inputClasses = cx({
    "rounded-full w-full h-[48px] pl-10 placeholder:text-sm placeholder:text-slate-300 border": true,
    "border-slate-300": !isInvalid,
    "border-red-500": isInvalid
  })

  const iconClasses = cx({
    "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-black": true,
    "text-red-500": isInvalid
  })

  return (
    <div className="mt-5">
      <label
        id={id}
        className="block text-xs font-medium leading-6 text-slate-400 mb-1"
      >
        { label }
      </label>
      <div className="relative rounded-md">
        { icon && (
          <div className={iconClasses}>
            { icon }
          </div>
        )}
        <motion.input
          className={inputClasses}
          placeholder={placeholder}
          { ...register(label, { required }) }
        />
      </div>
    </div>
  )
}

export default Input;
