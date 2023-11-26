"use client";

import useCart from "@/hooks/useCartModal";
import { priceFormatter } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import { Product } from "../../types";
import IconButton from "./icon-button";

const CartItem = ({ product }: { product: Product }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(product.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative md:h-48 md:w-48 rounded-md overflow-hidden h-24 w-24">
        <Image
          src={product.images[0].url}
          alt="product"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-o">
          <IconButton
            onClick={onRemove}
            icon={<X size={20} className="text-primary" />}
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-2 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-primary">{product.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-muted-foreground">{product.color.name}</p>
            <p className="text-muted-foreground ml-4 pl-4 border-l border-gray-400">
              {product.size.name}
            </p>
          </div>
          <p className="text-primary">
            {priceFormatter(Number(product.price))}
          </p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
