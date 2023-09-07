import {
  BestOffers,
  ClientSideCartProvider,
  HomeBanners,
  LastUnitsOffers,
  ProductBanners,
} from '@/components';

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto">
      <HomeBanners />
      <BestOffers />
      <ProductBanners />
      <LastUnitsOffers />

      <ClientSideCartProvider />
    </section>
  );
}
