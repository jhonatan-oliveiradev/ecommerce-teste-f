"use client";

import { useContext } from "react";
import Link from "next/link";
import { FanIcon, ShoppingCartIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Customer from "./customer";
import { CartContext } from "@/contexts/cart-context";

const Header = () => {
  const { cartAmount } = useContext(CartContext);

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background px-1">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5">
        <Link className="flex items-center gap-2" href="/">
          <FanIcon size={28} className="text-primary" />
          <span className="font-black text-black dark:text-white">
            Zion Store
          </span>
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            className="font-medium text-primary transition-all hover:text-primary/80"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-medium text-primary transition-all hover:text-primary/80"
            href="/products"
          >
            Produtos
          </Link>
          <Link
            className="font-medium text-primary transition-all hover:text-primary/80"
            href="/about"
          >
            Sobre
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Customer />
            <p className="hidden text-xs text-primary md:flex">Bem-vindo(a)!</p>
          </div>

          <Link className="relative" href="/cart">
            <ShoppingCartIcon size={24} className="text-primary" />
            {cartAmount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 px-2.5 font-semibold text-white">
                {cartAmount}
              </span>
            )}
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
