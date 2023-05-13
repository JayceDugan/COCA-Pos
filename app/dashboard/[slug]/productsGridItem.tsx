'use client';

import ProductImage from "@/app/dashboard/[slug]/productImage";
import { addLineItem } from "@/data-access/redux/features/checkout/checkoutSlice";
import { useAppDispatch } from "@/data-access/redux/hooks";
import { Product } from "@/types";
import { motion } from 'framer-motion';

const ProductsGridItem: React.FC<Product> = (product) => {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(addLineItem(product))

  return (
    <motion.li
      className="rounded-xl bg-white overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
    >
      <div className="p-2">
        <div className="rounded-xl overflow-hidden w-full relative h-[175px]">
          <ProductImage src={product.image} alt={product.title} />
        </div>
      </div>
      <div className="p-4 pt-2 text-center font-medium">
        <p className="text-md mb-1 capitalize">{ product.title }</p>
        <p className="text-sm text-orange-500">${ product.price }</p>
      </div>
    </motion.li>
  )
}

export default ProductsGridItem;
