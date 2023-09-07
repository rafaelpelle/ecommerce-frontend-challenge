import { initializeCart } from '@/utils/cart';
import { useEffect } from 'react';

export function useCart() {
  useEffect(() => {
    initializeCart();
  }, []);

  return {};
}
