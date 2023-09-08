import { MinusIcon, PlusIcon, TrashIcon } from '@/components';
import {
  CartProduct,
  addToCart,
  decreaseQuantityFromCart,
  removeFromCart,
} from '@/utils/cart';
import { numberToMonetary } from '@/utils/number';
import Image from 'next/image';

export interface CartItemProps {
  product: CartProduct;
}

const iconButtonClassName = 'btn btn-ghost btn-xs btn-circle';

export default function CartItem({ product }: CartItemProps) {
  return (
    <li className="flex mb-5">
      <Image
        src={`/assets/products/${product.id}.jpg`}
        alt={product.name}
        className="w-24 h-auto rounded-lg mr-3"
        sizes="100vw"
        width={0}
        height={0}
      />
      <div className="flex flex-col justify-between text-sm py-2 w-full">
        <div className="flex items-center justify-between">
          <p>{product.name}</p>
          <button
            className={iconButtonClassName}
            onClick={() => {
              removeFromCart(product);
            }}
          >
            <TrashIcon />
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <button
              className={iconButtonClassName}
              onClick={() => {
                decreaseQuantityFromCart(product);
              }}
            >
              <MinusIcon />
            </button>
            <span className="mx-2">{product.quantity}</span>
            <button
              className={iconButtonClassName}
              onClick={() => {
                addToCart(product);
              }}
            >
              <PlusIcon />
            </button>
          </div>
          <strong>
            {numberToMonetary(
              (product.discountedPrice ?? 0) * product.quantity,
            )}
          </strong>
        </div>
      </div>
    </li>
  );
}
