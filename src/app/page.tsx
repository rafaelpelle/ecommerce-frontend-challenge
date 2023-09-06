import { HomeBanners, ProductBanners } from '@/components';

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto">
      <HomeBanners />
      <ProductBanners />
    </section>
  );
}
