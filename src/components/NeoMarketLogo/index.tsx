import logoSrc from '@/../public/assets/logo.png';
import Image from 'next/image';

export default function NeoMarketLogo() {
  return <Image alt="RP Logo" src={logoSrc} className="w-24 h-auto" />;
}
