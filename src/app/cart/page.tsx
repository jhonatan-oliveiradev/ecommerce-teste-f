import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

const CartPage = () => {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <h2 className="my-4 text-left text-2xl font-bold">Meu carrinho</h2>
      <p className="mb-4 text-xs text-muted-foreground">
        Deseja ver produtos semelhantes?
      </p>

      <div className="flex items-center justify-between border-b border-muted-foreground">
        <Image
          src="https://i.imgur.com/uXrbyfA.jpg"
          alt="image 1"
          height={0}
          width={0}
          className="h-auto w-32 object-contain py-6"
          sizes="100vw"
          quality={100}
        />

        <span className="font-bold">R$ 400,00</span>

        <div className="flex items-center gap-4">
          <Button size="icon">
            <MinusIcon />
          </Button>
          <p>1</p>
          <Button size="icon">
            <PlusIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
