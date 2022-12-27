import { createContext, useContext, ReactNode, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  price: any;
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};
export const ShoppingContext = createContext({} as ShoppingCartContext);
import { useLocalStorage } from "../hooks/useLocalStorage";

export function useShoppingCart() {
  return useContext(ShoppingContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping cart",
    []
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function openCart() {
    setCartIsOpen(true);
  }
  function closeCart() {
    setCartIsOpen(false);
  }
  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1, price: 0 }];
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity == 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <ShoppingCart isCartOpen={cartIsOpen} />
    </ShoppingContext.Provider>
  );
}
