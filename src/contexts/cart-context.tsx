"use client";

import { Product } from "@/components/products";
import { createContext, ReactNode, useEffect, useState } from "react";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemToCart: (newItem: Product) => void;
  removeItemFromCart: (product: CartProps) => void;
  total: string;
  getTotalItems: () => number;
  clearCart: () => void;
}

export interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  cover: string;
  amount: number;
  total: number;
  category: string;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

const localStorageKey = "@zionStore:cart";

const CartProvider = ({ children }: CartProviderProps) => {
  const [total, setTotal] = useState("");
  const [cart, setCart] = useState<CartProps[]>(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(localStorageKey);
      if (value) return JSON.parse(value);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    totalResultCart(cart);
  }, [cart]);

  function clearCart() {
    setCart([]);
    setTotal("");
  }

  const addItemToCart = (newItem: Product) => {
    const itemIndex = cart.findIndex((item) => item.id === newItem.id);

    if (itemIndex !== -1) {
      let cartList = [...cart];
      cartList[itemIndex].amount += 1;
      cartList[itemIndex].total =
        cartList[itemIndex].amount * cartList[itemIndex].price;

      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((products) => [...products, data]);
    totalResultCart([...cart, data]);
  };

  const removeItemFromCart = (product: CartProps) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);

    if (cart[itemIndex]?.amount > 1) {
      let cartList = [...cart];
      cartList[itemIndex].amount -= 1;
      cartList[itemIndex].total =
        cartList[itemIndex].amount * cartList[itemIndex].price;

      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    const removeItem = cart.filter((item) => item.id !== product.id);
    setCart(removeItem);
    totalResultCart(removeItem);
  };

  const totalResultCart = (items: CartProps[]) => {
    const result = items.reduce((acc, obj) => acc + obj.total, 0);
    const formattedResult = result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    setTotal(formattedResult);
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.amount, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItemToCart,
        removeItemFromCart,
        total,
        getTotalItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
