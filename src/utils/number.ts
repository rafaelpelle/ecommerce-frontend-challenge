export function getRandomIntegerBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function numberToMonetary(value: number): string {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}
