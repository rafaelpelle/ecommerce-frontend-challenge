import { numberToMonetary } from '@/utils/number';
import { Product } from '@/utils/products';
import Image from 'next/image';
import { BuyButton } from './BuyButton';

export interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card card-compact card-bordered border-grey w-full">
      <div className="bg-primary rounded-t-xl">
        <p className="text-xs text-center p-2 text-white">
          Aproveite o desconto de{' '}
          <strong className="text-secondary">
            {product.discountPercentage}%
          </strong>
        </p>
      </div>
      <figure>
        <Image
          src={`/assets/products/${product.id}.jpg`}
          alt={product.name}
          className="w-full h-auto rounded"
          sizes="100vw"
          width={0}
          height={0}
        />
      </figure>
      <div className="card-body">
        <p className="text-sm text-center h-10">{product.name}</p>

        <div className="rating rating-xs flex justify-center my-2">
          {Array.from(Array(5).keys()).map((_, index) => (
            <input
              readOnly
              checked
              key={index}
              type="radio"
              name="rating-2"
              className={`mask mask-star-2 ${
                index < product.review ? 'bg-secondary' : 'opacity-30'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center justify-center">
          <strong>{numberToMonetary(product.discountedPrice ?? 0)}</strong>
          <strong className="line-through ml-5 opacity-40">
            {numberToMonetary(product.price)}
          </strong>
        </div>

        <div className="card-actions justify-center my-2">
          <BuyButton product={product} />
        </div>
      </div>
    </div>
  );
}
