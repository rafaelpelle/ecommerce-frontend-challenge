import Image from 'next/image';

export interface NeoMarketLogoProps {
  width?: number;
  height?: number;
}

export default function NeoMarketLogo({ width = 100 }: NeoMarketLogoProps) {
  return (
    <Image
      alt="RP Logo"
      src="/assets/logo.png"
      className="w-24 h-auto"
      width={width}
      height={0}
    />
  );
}
