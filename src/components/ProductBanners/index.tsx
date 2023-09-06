import Image from 'next/image';
import Link from 'next/link';

const banner1BlurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAADBAMAAABLxMOyAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAASUExURQ24lQ65lSJ+dCJ9dCKcb////81P5z4AAAABYktHRAX4b+nHAAAAB3RJTUUH5wkGEgw2k0MRvAAAAA5JREFUCNdjYGRQZnABAAC4AGkDNxiTAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTA5LTA2VDE4OjEyOjQ2KzAwOjAwXds5rQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wOS0wNlQxODoxMjo0NiswMDowMCyGgREAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDktMDZUMTg6MTI6NTQrMDA6MDAgprF5AAAAAElFTkSuQmCC';

const banner2BlurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAADBAMAAABLxMOyAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAVUExURSNAkjhAikk1eVw0dF9EbF5Fbv///2Zz3MEAAAABYktHRAZhZrh9AAAAB3RJTUUH5wkGEgw2k0MRvAAAAA5JREFUCNdjYGRQZnAFAAC5AGoAbWEIAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTA5LTA2VDE4OjEyOjQ3KzAwOjAw+6wyGQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wOS0wNlQxODoxMjo0NyswMDowMIrxiqUAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDktMDZUMTg6MTI6NTQrMDA6MDAgprF5AAAAAElFTkSuQmCC';

const banner3BlurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAADBAMAAABLxMOyAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAVUExURetNQO1HNqZKQpQ+N8dJK6dEKf///9CtcJcAAAABYktHRAZhZrh9AAAAB3RJTUUH5wkGEgw2k0MRvAAAAA5JREFUCNdjYGRQZnAFAAC5AGoAbWEIAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTA5LTA2VDE4OjEyOjQ3KzAwOjAw+6wyGQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wOS0wNlQxODoxMjo0NyswMDowMIrxiqUAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDktMDZUMTg6MTI6NTQrMDA6MDAgprF5AAAAAElFTkSuQmCC';

export default function ProductBanners() {
  return (
    <div className="grid grid-cols-12 gap-4 my-8">
      <div className="col-span-12 md:col-span-4">
        <Link href="/xbox" prefetch={false}>
          <Image
            className="w-full h-auto rounded"
            alt="Product Banner 1"
            src="/assets/product-banner1.png"
            sizes="100vw"
            width={0}
            height={0}
            placeholder="blur"
            blurDataURL={banner1BlurDataURL}
          />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-4">
        <Link href="/oneplus" prefetch={false}>
          <Image
            className="w-full h-auto rounded"
            alt="Product Banner 1"
            src="/assets/product-banner2.png"
            sizes="100vw"
            width={0}
            height={0}
            placeholder="blur"
            blurDataURL={banner2BlurDataURL}
          />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-4">
        <Link href="/headphones" prefetch={false}>
          <Image
            className="w-full h-auto rounded"
            alt="Product Banner 3"
            src="/assets/product-banner3.png"
            sizes="100vw"
            width={0}
            height={0}
            placeholder="blur"
            blurDataURL={banner3BlurDataURL}
          />
        </Link>
      </div>
    </div>
  );
}
