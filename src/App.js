import { add } from "./add";

export const multiply = (x, y) => x * y;

export const total = (shipping, subtotal) => {
  return `$${add(shipping, subtotal)}`;
};
