import Products from "@/components/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CheckoutPage = () => {
  return (
    <section className="mx-auto h-auto w-full max-w-7xl">
      <h2 className="mt-4 text-left text-2xl font-bold">Pedido feito!</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Obrigado por comprar conosco!
      </p>

      <Link href="/">
        <Button>Explorar mais ofertas!</Button>
      </Link>

      <div className="flex flex-col gap-4">
        <h2 className="mt-4 text-left text-2xl font-bold">
          Você também pode gostar
        </h2>
        <Products />
      </div>
    </section>
  );
};

export default CheckoutPage;
