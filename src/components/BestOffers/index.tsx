import { getRandomIntegerBetween } from '@/utils/number';
import { Product, productsList } from '@/utils/products';
import { useMemo } from 'react';
import { ProductCard } from '..';

export default function BestOffers() {
  const productsToRender: Product[] = useMemo(
    () =>
      productsList.slice(0, 8).map((item) => {
        const discountPercentage = getRandomIntegerBetween(1, 50);
        return {
          ...item,
          discountPercentage,
          discountedPrice: item.price * (discountPercentage / 100),
        };
      }),
    [],
  );

  return (
    <section className="my-24">
      <h2 className="text-xl text-center mb-5">
        MEGA <strong className="text-primary">OFERTAS</strong>
      </h2>

      <div className="grid grid-cols-12 gap-4">
        {productsToRender.map((item, index) => (
          <div key={index} className="col-span-12 sm:col-span-3">
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
