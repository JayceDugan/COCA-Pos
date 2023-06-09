'use client';

import CheckoutLineItem from "@/app/dashboard/checkoutLineItem";
import { selectCheckoutLineItems } from "@/data-access/redux/features/checkout/checkoutSlice";
import { useAppSelector } from "@/data-access/redux/hooks";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";

const CheckoutOrderDetails = () => {
  const checkoutLineItems = useAppSelector(selectCheckoutLineItems);
  const checkoutLineItemsList = Object.entries(checkoutLineItems).map(([_, product]) => <CheckoutLineItem key={product.title}{ ...product } />)
  const lineItemsExist = checkoutLineItemsList.length;

  return (
    <div className="px-6 py-0">
      <h2 className="text-lg font-semibold mb-2">Orders Details</h2>

      { lineItemsExist ? (
        <ul className="h-[321px] overflow-auto">
          <AnimatePresence>
            { checkoutLineItemsList }
          </AnimatePresence>
        </ul>
      ) : (
        <div className="text-center flex flex-col items-center justify-center py-5 h-[318px]">
          <ArchiveBoxIcon className="h-32 w-32 text-slate-300" />
          <p className="text-sm text-slate-400">Order empty, start by selecting a product.</p>
        </div>
      )}
    </div>
  )
}

export default CheckoutOrderDetails;
