"use client";

import CartItem from "@/components/cart-item";
import Container from "@/components/container";
import NoResults from "@/components/no-results";
import Summary from "@/components/summary";
import useCart from "@/hooks/useCartModal";

const CartPage = () => {
  const cart = useCart();

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && <NoResults />}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} product={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
