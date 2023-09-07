import { getRandomIntegerBetween } from '@/utils/number';

export interface Product {
  name: string;
  imgSrc: string;
  price: number;
  review: number;
  discountPercentage?: number;
  discountedPrice?: number;
}

export const productsList: Product[] = [
  {
    name: 'Smartwatch pulseira branca',
    imgSrc: '/assets/products/1.jpg',
    price: 1234.56,
    review: 4,
  },
  {
    name: 'Smartwatch pulseira metálica',
    imgSrc: '/assets/products/2.jpg',
    price: 1345.67,
    review: 5,
  },
  {
    name: 'Caixa de som bluetooth laranja',
    imgSrc: '/assets/products/3.jpg',
    price: 434.56,
    review: 4,
  },
  {
    name: 'Mochila vermelha para notebook',
    imgSrc: '/assets/products/4.jpg',
    price: 234.56,
    review: 4,
  },
  {
    name: 'Headset rosa com cat ears',
    imgSrc: '/assets/products/5.jpg',
    price: 234.56,
    review: 4,
  },
  {
    name: 'Headset wireless de couro marrom',
    imgSrc: '/assets/products/6.jpg',
    price: 634.56,
    review: 5,
  },
  {
    name: 'Fone de ouvido intra-auricular P2',
    imgSrc: '/assets/products/7.jpg',
    price: 94.56,
    review: 4,
  },
  {
    name: 'Controle Xbox Elite branco',
    imgSrc: '/assets/products/8.jpg',
    price: 434.56,
    review: 5,
  },
  {
    name: 'Controle Xbox Elite rosa',
    imgSrc: '/assets/products/9.jpg',
    price: 434.56,
    review: 5,
  },
  {
    name: 'Smartphone Apple iPhone vermelho',
    imgSrc: '/assets/products/10.jpg',
    price: 4234.56,
    review: 5,
  },
  {
    name: 'Smartphone Samsung violeta',
    imgSrc: '/assets/products/11.jpg',
    price: 3234.56,
    review: 5,
  },
  {
    name: 'Boneco interativo BeatBo Fisher-Price',
    imgSrc: '/assets/products/12.jpg',
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
