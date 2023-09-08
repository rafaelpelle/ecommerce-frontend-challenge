'use client';

import { addToCart } from '@/utils/cart';
import { Product } from '@/utils/products';
import { Fragment, useState } from 'react';
import SuccessAlert from './SuccessAlert';

export interface BuyButtonProps {
  product: Product;
}

export function BuyButton({ product }: BuyButtonProps) {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <Fragment>
      <button
        className="btn btn-secondary btn-sm text-white text-xs rounded-full hover:text-black"
        onClick={() => {
          addToCart(product);
          setClicked(true);
          setTimeout(() => {
            setClicked(false);
          }, 3000);
        }}
      >
        APROVEITE
      </button>

      {clicked && <SuccessAlert />}
    </Fragment>
  );
}
