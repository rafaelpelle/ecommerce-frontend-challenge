import { LinkColumn, SocialLinks, Subscribe } from '@/components';
import Image from 'next/image';

export interface FooterLink {
  text: string;
  href: string;
}

const firstColumnLinks: FooterLink[] = [
  { text: 'Quem somos', href: '/quemsomos' },
  { text: 'Missão e visão', href: '/missao' },
  { text: 'Valores', href: '/valores' },
];

const secondColumnLinks: FooterLink[] = [
  { text: 'Entregas', href: '/entregas' },
  { text: 'Trocas e Devoluções', href: '/devolucoes' },
  { text: 'Fale Conosco', href: '/contato' },
  { text: 'Dúvidas Frequentes', href: '/faq' },
];

const thirdColumnLinks: FooterLink[] = [
  { text: 'Minha Conta', href: '/minhaconta' },
  { text: 'Meus Pedidos', href: '/meuspedidos' },
];

export default function Footer() {
  return (
    <footer className="pb-24 px-2 max-w-5xl mx-auto">
      <Subscribe />

      <div className="mt-24 grid grid-cols-12 gap-4">
        <LinkColumn title="INSTITUCIONAL" links={firstColumnLinks} />
        <LinkColumn title="ATENDIMENTO" links={secondColumnLinks} />
        <LinkColumn title="ÁREA DO CLIENTE" links={thirdColumnLinks} />
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <div className="w-fit md:mx-auto">
            <h4 className="font-bold mb-2">CONFIE</h4>
            <Image
              alt="encrypt logo"
              src="/assets/encrypt-logo.png"
              className="w-20 h-auto"
              width={100}
              height={0}
            />
            <Image
              alt="JET logo"
              src="/assets/logo-JET.png"
              className="w-20 h-auto mt-5"
              width={100}
              height={0}
            />
          </div>
        </div>
      </div>

      <div className="divider my-6 sm:my-12 sm:mx-12" />

      <div className="max-w-md mx-auto px-5">
        <SocialLinks />
      </div>

      <div className="divider mt-6 sm:mt-12 sm:mx-12" />

      <p className="text-center text-sm">
        <strong>NeoMarket</strong>
        <span className="opacity-40">
          {' '}
          - Loprem ipsum dollar - 12345678/0001-01
        </span>
      </p>
    </footer>
  );
}
