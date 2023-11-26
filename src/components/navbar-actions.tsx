"use client";

import useCart from "@/hooks/useCartModal";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push("/cart")} variant="rounded">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
