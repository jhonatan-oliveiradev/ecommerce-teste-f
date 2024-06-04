"use client";

import { ProductsProps } from "@/components/products";
import { createContext, ReactNode, useState } from "react";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemToCart: (newItem: ProductsProps) => void;
  removeItemFromCart: (product: CartProps) => void;
  total: string;
  getTotalItems: () => number;
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

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [total, setTotal] = useState("");

  const addItemToCart = (newItem: ProductsProps) => {
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
