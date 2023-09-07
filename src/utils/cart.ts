import { Product } from './products';

export interface CartProduct extends Product {
  quantity: number;
}

export const CART_STORAGE_KEY = 'neo-market-cart';

export function initializeCart() {
  const cart = localStorage.getItem(CART_STORAGE_KEY);

  if (!cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify([]));
  }
}

export function getCartSize(): number {
  if (typeof localStorage === 'undefined') return 0;

  let size = 0;
  const cart: CartProduct[] = JSON.parse(
    localStorage.getItem(CART_STORAGE_KEY) || '[]',
  );
  cart.forEach((item) => {
    size += item.quantity;
  });

  return size;
}

export function addToCart(product: Product) {
  const cart: CartProduct[] = JSON.parse(
    localStorage.getItem(CART_STORAGE_KEY) || '[]',
  );

  const index = cart.findIndex((p: CartProduct) => p.id === product.id);

  if (index === -1) {
    const newCartItem: CartProduct = { ...product, quantity: 1 };
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify([...cart, newCartItem]),
    );
  } else {
    cart[index] = {
      ...product,
      quantity: cart[index].quantity + 1,
    };
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify([...cart]));
  }
}
export function removeFromCart(product: Product) {
  console.log('teste', product.id);
}
export function decreaseQuantityFromCart(product: Product) {
  console.log('teste', product.id);
}
