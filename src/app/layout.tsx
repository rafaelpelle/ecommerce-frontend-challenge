import { Footer, Header } from '@/components';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NEO Market',
  description: 'NEO Market e-commerce page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={montserrat.className}>
        <Header>{children}</Header>
        <section className="hidden sm:block">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
