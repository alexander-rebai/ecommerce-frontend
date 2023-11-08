import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function priceFormatter(price: number) {
  return new Intl.NumberFormat("be-BE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}
