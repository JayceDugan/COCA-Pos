'use client';

import Image from "next/image";
import { useState } from "react";

export interface ProductImageProps {
  src: string,
  alt: string
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      { !imageLoaded && <div className="skeleton-box h-full" /> }
      <Image
        src={src}
        alt={alt}
        fill={true}
        style={{ objectFit: 'cover' }}
        onLoadingComplete={() => setImageLoaded(true)}
      />
    </>
  )
}

export default ProductImage;
