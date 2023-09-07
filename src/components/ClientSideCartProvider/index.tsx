'use client';

import { useCart } from '@/hooks/useCart';
import { Fragment } from 'react';

export default function ClientSideCartProvider() {
  useCart();

  return <Fragment />;
}
