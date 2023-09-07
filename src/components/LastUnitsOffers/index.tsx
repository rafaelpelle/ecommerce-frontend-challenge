import { ProductCard } from '@/components';
import { Product, parseProduct, productsList } from '@/utils/products';
import { useMemo } from 'react';

export default function LastUnitsOffers() {
  const productsToRender: Product[] = useMemo(
    () => productsList.slice(8, 12).map(parseProduct),
    [],
  );

  return (
    <section className="my-24">
      <h2 className="text-xl text-center mb-5">
        ÚLTIMAS <strong className="text-primary">UNIDADES</strong>
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
