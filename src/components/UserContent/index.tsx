import { CartIcon, UserIcon, WishlistIcon } from '@/components';
import Link from 'next/link';

export default function UserContent() {
  return (
    <section className="text-white flex items-center">
      <div className="flex items-center">
        <UserIcon />
        <div className="ml-1 text-xs">
          <p>Bem vinda(o)</p>
          <p>
            <Link className="text-secondary font-semibold" href="/login">
              Faça login
            </Link>{' '}
            ou{' '}
            <Link className="font-semibold" href="/register">
              cadastre-se
            </Link>
          </p>
        </div>
      </div>

      <Link href="/wishlist" className="ml-7">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary text-primary text-xs">
            1
          </span>
          <WishlistIcon />
        </div>
      </Link>

      <Link href="/cart" className="ml-7">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary text-primary text-xs">
            1
          </span>
          <CartIcon />
        </div>
      </Link>
    </section>
  );
}
