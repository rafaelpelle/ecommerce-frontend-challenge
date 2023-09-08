'use client';

import { CartIcon, UserIcon, WishlistIcon } from '@/components';
import { getCartSize } from '@/utils/cart';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function UserContent() {
  const [cartSize, setCartSize] = useState<number>(0);

  useEffect(() => {
    const listenCartChange = () => {
      setCartSize(getCartSize());
    };

    setCartSize(getCartSize());
    window.addEventListener('cartUpdated', listenCartChange);
    return () => window.removeEventListener('cartUpdated', listenCartChange);
  }, []);

  return (
    <section className="text-white flex items-center">
      <div className="flex items-center">
        <UserIcon />
        <div className="ml-1 text-xs">
          <p>Bem vinda(o)</p>
          <p>
            <Link
              className="text-secondary font-semibold"
              href="/login"
              prefetch={false}
            >
              Faça login
            </Link>{' '}
            ou{' '}
            <Link className="font-semibold" href="/register" prefetch={false}>
              cadastre-se
            </Link>
          </p>
        </div>
      </div>

      <Link href="/wishlist" className="ml-7" prefetch={false}>
        <div className="indicator">
          <WishlistIcon />
        </div>
      </Link>

      <Link href="/cart" className="ml-7" prefetch={false}>
        <div className="indicator">
          <span className="indicator-item badge badge-secondary text-primary text-xs">
            {cartSize}
          </span>
          <CartIcon />
        </div>
      </Link>
    </section>
  );
}
