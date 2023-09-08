import banner1Src from '@/../public/assets/banner1.png';
import banner2Src from '@/../public/assets/banner2.png';
import fullBannerSrc from '@/../public/assets/full-banner.png';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeBanners() {
  return (
    <div className="grid grid-cols-12 gap-4 my-8">
      <div className="col-span-12">
        <Link href="/desk-collection" prefetch={false}>
          {/* This image is set with priority because it's the page LCP */}
          <Image
            className="w-full h-auto rounded"
            alt="Full Banner"
            src={fullBannerSrc}
            priority
            loading="eager"
          />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Link href="/kids" prefetch={false}>
          <Image
            className="w-full h-auto rounded"
            alt="Banner 1"
            src={banner1Src}
            placeholder="blur"
          />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Link href="/kids" prefetch={false}>
          <Image
            className="w-full h-auto rounded"
            alt="Banner 1"
            src={banner2Src}
            placeholder="blur"
          />
        </Link>
      </div>
    </div>
  );
}
