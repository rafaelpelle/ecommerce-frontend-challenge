import { numberToMonetary } from '@/utils/number';
import { Product } from '@/utils/products';
import Image from 'next/image';

export interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card card-compact card-bordered border-grey w-full">
      <figure>
        <Image
          src={product.imgSrc}
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
              checked
              key={index}
              type="radio"
              name="rating-2"
              className={`mask mask-star-2 ${
                index < product.review ? 'bg-secondary' : 'opacity-50'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center justify-center">
          <strong>{numberToMonetary(product.discountedPrice ?? 0)}</strong>
          <span className="line-through ml-5 opacity-75">
            {numberToMonetary(product.price)}
          </span>
        </div>

        <div className="card-actions justify-center my-2">
          <button className="btn btn-secondary btn-sm text-white text-xs rounded-full hover:text-black">
            APROVEITE
          </button>
        </div>
      </div>
    </div>
  );
}
