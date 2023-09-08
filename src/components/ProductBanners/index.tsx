import banner1Src from '@/../public/assets/product-banner1.png';
import banner2Src from '@/../public/assets/product-banner2.png';
import banner3Src from '@/../public/assets/product-banner3.png';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductBanners() {
  return (
    <div className="grid grid-cols-12 gap-4 my-8">
      <div className="col-span-12 md:col-span-4">
        <Link href="/xbox" prefetch={false}>
          <Image
            className="w-full h-auto rounded"
            alt="Product Banner 1"
            src={banner1Src}
            placeholder="blur"
          />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-4">
        <Link href="/oneplus" prefetch={false}>
          <Image
            className="w-full h-auto rounded"
            alt="Product Banner 2"
            src={banner2Src}
            placeholder="blur"
          />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-4">
        <Link href="/headphones" prefetch={false}>
          <Image
            className="w-full h-auto rounded"
            alt="Product Banner 3"
            src={banner3Src}
            placeholder="blur"
          />
        </Link>
      </div>
    </div>
  );
}
