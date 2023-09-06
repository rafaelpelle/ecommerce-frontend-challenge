import Image from 'next/image';
import Link from 'next/link';

const banner1BlurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABAgMAAABmjvwnAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURUfCzUrB0mS9xP///0bZe78AAAABYktHRAMRDEzyAAAAB3RJTUUH5wkGESgN0eanZwAAAApJREFUCNdjkAAAABoAGYcG7HQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDktMDZUMTc6Mzk6NTMrMDA6MDBEtYGXAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA5LTA2VDE3OjM5OjUzKzAwOjAwNeg5KwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wOS0wNlQxNzo0MDoxMyswMDowMDOZKEcAAAAASUVORK5CYII=';

const banner2BlurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABAgMAAABmjvwnAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAMUExURei4Jf3OD//OCv///xRzL/MAAAABYktHRAMRDEzyAAAAB3RJTUUH5wkGESgN0eanZwAAAApJREFUCNdjkAAAABoAGYcG7HQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDktMDZUMTc6Mzk6NTQrMDA6MDCBEr8ZAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA5LTA2VDE3OjM5OjU0KzAwOjAw8E8HpQAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wOS0wNlQxNzo0MDoxMyswMDowMDOZKEcAAAAASUVORK5CYII=';

export default function HomeBanners() {
  return (
    <div className="grid grid-cols-12 gap-4 my-8">
      <div className="col-span-12">
        <Link href="/desk-collection" prefetch={false}>
          {/* This image is set with priority because it's the page LCP */}
          <Image
            className="w-full h-auto rounded"
            alt="Full Banner"
            src="/assets/full-banner.png"
            sizes="100vw"
            width={0}
            height={0}
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
            src="/assets/banner1.png"
            sizes="100vw"
            width={0}
            height={0}
            placeholder="blur"
            blurDataURL={banner1BlurDataURL}
          />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Link href="/kids" prefetch={false}>
          <Image
            className="w-full h-auto rounded"
            alt="Banner 1"
            src="/assets/banner2.png"
            sizes="100vw"
            width={0}
            height={0}
            placeholder="blur"
            blurDataURL={banner2BlurDataURL}
          />
        </Link>
      </div>
    </div>
  );
}
