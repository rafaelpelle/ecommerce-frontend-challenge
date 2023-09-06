'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuLinks = [
  {
    text: 'Todas as Categorias',
    href: '/',
  },
  {
    text: 'celulares e smartphones',
    href: '/smartphones',
  },
  {
    text: 'informática',
    href: '/informatica',
  },
  {
    text: 'tv e video',
    href: '/tv',
  },
  {
    text: 'eletrodomésticos',
    href: '/eletrodomesticos',
  },
  {
    text: 'eletroportáteis',
    href: '/eletroportateis',
  },
  {
    text: 'móveis',
    href: '/moveis',
  },
  {
    text: 'beleza e perfumaria',
    href: '/beleza',
  },
];

export default function MenuListItems() {
  const pathname = usePathname();

  return menuLinks.map(({ text, href }) => {
    const isActive = pathname === href;

    return (
      <li key={href}>
        <Link
          prefetch={false}
          className={`text-white sm:text-black sm:text-xs ${
            isActive
              ? 'sm:bg-primary sm:hover:bg-primary sm:rounded-b-none sm:text-white'
              : ''
          }`}
          href={href}
        >
          {text}
        </Link>
      </li>
    );
  });
}
