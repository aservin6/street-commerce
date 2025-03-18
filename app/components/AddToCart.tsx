"use client";

import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  image: string;
  name: string;
  price: number;
  currency: string;
  price_id: string;
}

export default function AddToCart({
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem } = useShoppingCart();
  const product = {
    image: urlFor(image).url(),
    name,
    price,
    currency: "USD",
    price_id,
  };

  return (
    <div className="mt-1.5 bg-stone-800 text-center text-stone-100 sm:max-w-3xs">
      <button
        onClick={() => {
          addItem(product);
        }}
        className="w-full cursor-pointer py-3 font-medium uppercase"
      >
        Add to Cart
      </button>
    </div>
  );
}
