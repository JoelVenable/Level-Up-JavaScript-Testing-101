export const add = (x, y) => x + y;

export const multiply = (x, y) => x * y;

export const total = (subtotal, total) => {
  return `$${add(subtotal, total)}`;
};
