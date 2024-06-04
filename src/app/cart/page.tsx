"use client";

import { useContext } from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import ProductResume from "./components/product-resume";
import { CartContext } from "@/contexts/cart-context";
import Link from "next/link";

const CartPage = () => {
  const { cart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  return (
    <section className="mx-auto w-full max-w-7xl">
      <h2 className="my-4 text-left text-2xl font-bold">Meu carrinho</h2>
      <p className="mb-4 text-xs text-muted-foreground">
        Deseja ver produtos semelhantes?
      </p>

      {cart.length === 0 && (
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
            <p className="mb-6 text-lg font-bold">
              {" "}
              Carrinho vazio. Vamos fazer compras?
            </p>
            <Link href="/products">
              <Button className="w-full">Escolher produtos</Button>
            </Link>
          </div>
        </div>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-between border-b border-muted-foreground md:flex-row"
        >
          <Image
            src={item.cover}
            alt={item.title}
            height={0}
            width={0}
            className="h-auto w-32 object-contain py-6"
            sizes="100vw"
            quality={100}
          />

          <span className="font-bold">R$ {item.price}</span>
          <div className="flex items-center gap-4">
            {item.amount - 1 ? (
              <Button
                className="h-6 w-6"
                onClick={() => removeItemFromCart(item)}
                size="icon"
              >
                <MinusIcon />
              </Button>
            ) : (
              <Button
                className="h-6 w-6 bg-red-500 hover:bg-red-800"
                onClick={() => removeItemFromCart(item)}
                size="icon"
              >
                <Trash2Icon size={14} />
              </Button>
            )}
            <p>{item.amount}</p>
            <Button
              className="h-6 w-6"
              onClick={() => addItemToCart(item)}
              size="icon"
            >
              <PlusIcon />
            </Button>
          </div>
          <strong>
            Subtotal:{" "}
            {item.total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </div>
      ))}

      {cart.length !== 0 && (
        <div className="flex flex-col-reverse items-start justify-between md:flex-row lg:items-end">
          <div className="flex-1"></div>

          <ProductResume />
        </div>
      )}
    </section>
  );
};

export default CartPage;
