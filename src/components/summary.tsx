"use client";

import useCart from "@/hooks/useCartModal";
import { priceFormatter } from "@/lib/utils";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

const Summary = () => {
  const { items, removeAllItems } = useCart();
  const searchParams = useSearchParams();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment successful");
      removeAllItems();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong. Please try again.");
    }
  }, [searchParams, removeAllItems]);

  if (!isMounted) return null;

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-muted px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg text-primary font-medium">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-muted-foreground pt-4">
          <div className="text-base font-medium text-primary">Order Total</div>
          <p className="text-primary">{priceFormatter(Number(totalPrice))}</p>
        </div>
      </div>
      <Button className="w-full mt-6" onClick={onCheckout}>
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
