"use client";

import { priceFormatter } from "@/lib/utils";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useEffect, useState } from "react";
import { Product } from "../../types";
import usePreviewModal from "../hooks/usePreviewModal";
import IconButton from "./icon-button";
import { Card, CardContent, CardFooter } from "./ui/card";

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const previewModal = usePreviewModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(product);
  };

  return (
    <Card
      key={product.id}
      className="hover:cursor-pointer group"
      onClick={handleClick}
    >
      <CardContent className="p-3">
        <div className="aspect-square relative bg-gray-100">
          <Image
            src={product.images[0].url}
            alt="product"
            fill
            className="rounded-xl object-cover"
          />
          <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              <IconButton
                onClick={onPreview}
                icon={<Expand size={20} className="text-gray-600" />}
              />
              <IconButton
                icon={<ShoppingCart size={20} className="text-gray-600" />}
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col">
          <p className="font-semibold text-lg">{product.name}</p>
          <p className="text-muted-foreground text-sm">
            {product.category.name}
          </p>
          <div className="font-semibold">
            {priceFormatter(Number(product.price))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
