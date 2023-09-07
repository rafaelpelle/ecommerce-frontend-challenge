import { FooterLink } from '@/components/Footer';
import Link from 'next/link';

export interface LinkColumnProps {
  title: string;
  links: FooterLink[];
}

export default function LinkColumn({ title, links }: LinkColumnProps) {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 mb-5">
      <div className="w-fit sm:mx-auto">
        <h4 className="font-bold mb-2">{title}</h4>
        {links.map(({ text, href }) => (
          <Link key={href} prefetch={false} href={href} className="mt-1 block">
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
}
