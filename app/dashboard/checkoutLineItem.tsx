'use client';

import ProductImage from "@/app/dashboard/[slug]/productImage";
import {
  CheckoutLineItem as CheckoutLineItemProps,
  decrementLineItemQuantity, incrementLineItemQuantity
} from "@/data-access/redux/features/checkout/checkoutSlice";
import { useAppDispatch } from "@/data-access/redux/hooks";
import { motion } from 'framer-motion';

const CheckoutLineItem: React.FC<CheckoutLineItemProps> = (product) => {
  const dispatch = useAppDispatch()

  return (
    <motion.li
      className="flex items-start gap-2 w-full border-b border-gray-300 py-4"
      initial={{ opacity: 0, scale: 0.5 }}
      exit={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-[74px] h-[74px] relative rounded-xl overflow-hidden">
        <ProductImage src={product.image} alt={product.title} />
      </div>

      <div className="flex-1">
        <p className="mb-3 text-sm font-semibold">{product.title}</p>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-slate-400">Price</p>
            <p className="text-orange-500 font-bold text-sm">${ product.price }</p>
          </div>

          <div className="flex self-end justify-end items-center gap-3">
            <button
              className="rounded-full text-xl bg-slate-200 h-[33px] w-[33px] flex items-center justify-center text-slate-600 leading-none"
              onClick={() => dispatch(decrementLineItemQuantity(product))}
            >
              -
            </button>
            { product.quantity }
            <button
              className="rounded-full text-xl bg-slate-800 h-[33px] w-[33px] flex items-center justify-center text-white leading-none"
              onClick={() => dispatch(incrementLineItemQuantity(product))}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </motion.li>
  )
}

export default CheckoutLineItem
