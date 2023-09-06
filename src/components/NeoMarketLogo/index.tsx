import Image from 'next/image';

export interface NeoMarketLogoProps {
  width?: number;
  height?: number;
}

export default function NeoMarketLogo({
  width = 100,
  height = 100,
}: NeoMarketLogoProps) {
  return (
    <Image alt="RP Logo" src="/assets/logo.png" width={width} height={height} />
  );
}
