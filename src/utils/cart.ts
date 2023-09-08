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

export function getCart(): CartProduct[] {
  if (typeof localStorage === 'undefined') return [];

  return JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
}

export function getCartSize(): number {
  const cart: CartProduct[] = getCart();
  let size = 0;
  cart.forEach((item) => {
    size += item.quantity;
  });
  return size;
}

export function addToCart(product: Product) {
  const cart: CartProduct[] = getCart();

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
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }
  window.dispatchEvent(new Event('cartUpdated'));
}

export function removeFromCart({ id }: Product) {
  const cart: CartProduct[] = getCart();
  localStorage.setItem(
    CART_STORAGE_KEY,
    JSON.stringify(cart.filter((p: CartProduct) => p.id !== id)),
  );
  window.dispatchEvent(new Event('cartUpdated'));
}

export function decreaseQuantityFromCart(product: Product) {
  const { id } = product;
  const cart: CartProduct[] = getCart();
  const index = cart.findIndex((p: CartProduct) => p.id === id);
  const newQuantity = cart[index].quantity - 1;

  if (newQuantity === 0) {
    removeFromCart(product);
  } else {
    cart[index] = {
      ...cart[index],
      quantity: newQuantity,
    };
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
  }
}
