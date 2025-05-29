import { ProductType } from "../types/index";

const USD_TO_INR = 80;

const formatINR = (amount: number): string => `₹${amount.toLocaleString("en-IN")}`;

export const convertProductPriceToINR = (product: ProductType): ProductType => {
  const inrPrice = Math.round(product.price * USD_TO_INR);

  return {
    ...product,
    originalPriceUSD: product.price,
    price: inrPrice,
    priceFormatted: formatINR(inrPrice),
  };
};
