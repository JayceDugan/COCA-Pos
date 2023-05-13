import { motion } from 'framer-motion'
import { ReactNode, useId } from "react";
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

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
}

const Input = <T extends FieldValues = {}>({ label, register, required, icon, size, placeholder }: InputProps<T>) => {
  const id = useId();

  return (
    <div>
      <label
        id={id}
        className="block text-xs font-medium leading-6 text-slate-400 mb-1"
      >
        { label }
      </label>
      <div className="relative rounded-md mb-5">
        { icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            { icon }
          </div>
        )}
        <motion.input
          className="border border-slate-300 rounded-full w-full h-[48px] pl-10 placeholder:text-sm placeholder:text-slate-300"
          placeholder={placeholder}
          { ...register(label, { required }) }
        />
      </div>
    </div>
  )
}

export default Input;
