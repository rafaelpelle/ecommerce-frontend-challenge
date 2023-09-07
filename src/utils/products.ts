import { getRandomIntegerBetween } from '@/utils/number';

export interface Product {
  id: string;
  name: string;
  price: number;
  review: number;
  discountPercentage?: number;
  discountedPrice?: number;
}

export const productsList: Product[] = [
  {
    id: '1',
    name: 'Smartwatch pulseira branca',
    price: 1234.56,
    review: 4,
  },
  {
    id: '2',
    name: 'Smartwatch pulseira metálica',
    price: 1345.67,
    review: 5,
  },
  {
    id: '3',
    name: 'Caixa de som bluetooth laranja',
    price: 434.56,
    review: 4,
  },
  {
    id: '4',
    name: 'Mochila vermelha para notebook',
    price: 234.56,
    review: 4,
  },
  {
    id: '5',
    name: 'Headset rosa com cat ears',
    price: 234.56,
    review: 4,
  },
  {
    id: '6',
    name: 'Headset wireless de couro marrom',
    price: 634.56,
    review: 5,
  },
  {
    id: '7',
    name: 'Fone de ouvido intra-auricular P2',
    price: 94.56,
    review: 4,
  },
  {
    id: '8',
    name: 'Controle Xbox Elite branco',
    price: 434.56,
    review: 5,
  },
  {
    id: '9',
    name: 'Controle Xbox Elite rosa',
    price: 434.56,
    review: 5,
  },
  {
    id: '10',
    name: 'Smartphone Apple iPhone vermelho',
    price: 4234.56,
    review: 5,
  },
  {
    id: '11',
    name: 'Smartphone Samsung violeta',
    price: 3234.56,
    review: 5,
  },
  {
    id: '12',
    name: 'Boneco interativo BeatBo Fisher-Price',
    price: 59.9,
    review: 4,
  },
];

export function parseProduct(product: Product): Product {
  const discountPercentage = getRandomIntegerBetween(1, 50);
  return {
    ...product,
    discountPercentage,
    discountedPrice: product.price * (1 - discountPercentage / 100),
  };
}
