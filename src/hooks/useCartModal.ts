import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Product } from "../../types";

type CartStore = {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  removeAllItems: () => void;
};

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const itemExists = currentItems.find((item) => item.id === data.id);

        if (itemExists) {
          return toast("Item already in cart");
        }

        set({ items: [...currentItems, data] });
        toast.success("Item added to cart");
      },
      removeItem: (id) => {
        const newItems = get().items.filter((item) => item.id !== id);

        set({ items: newItems });
        toast.success("Item removed from cart");
      },
      removeAllItems: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
