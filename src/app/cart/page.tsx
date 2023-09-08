'use client';

import CartItem from '@/components/CartItem';
import { CartProduct, getCart } from '@/utils/cart';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    const listenCartChange = () => {
      setCart(getCart());
    };

    setCart(getCart());
    window.addEventListener('cartUpdated', listenCartChange);
    return () => window.removeEventListener('cartUpdated', listenCartChange);
  }, []);

  return (
    <section className="max-w-sm mx-auto mt-12 mb-36">
      {cart?.length > 0 ? (
        <Fragment>
          <h1 className="text-lg font-bold mb-5">Seu carrinho de compras:</h1>
          <ul>
            {cart.map((item, index) => (
              <CartItem key={index} product={item} />
            ))}
          </ul>
        </Fragment>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-bold text-center">
            Seu carrinho de compras está vazio!
          </h1>
          <Link href="/" className="btn btn-primary mx-auto mt-5">
            CONTINUE COMPRANDO
          </Link>
        </div>
      )}
    </section>
  );
}
