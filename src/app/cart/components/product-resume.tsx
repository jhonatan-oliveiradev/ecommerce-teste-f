"use client";

import { useContext } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TruckIcon } from "lucide-react";
import { CartContext } from "@/contexts/cart-context";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const ProductResume = () => {
  const { push } = useRouter();
  const { total, getTotalItems, clearCart } = useContext(CartContext);
  const totalItems = getTotalItems();
  const { toast } = useToast();

  const handleFinishOrder = () => {
    toast({
      title: "Pedido finalizado",
      description: "Seu pedido foi finalizado com sucesso",
    }),
      clearCart();

    push("/");
  };

  return (
    <Card className="my-6 flex flex-col items-start justify-center">
      <CardHeader className="mb-2 w-full border-b">
        <p className="font-bold">Resumo do pedido</p>
      </CardHeader>
      <CardContent className="mb-2 flex w-full flex-col items-start gap-2 border-b">
        <div>
          <span>QTD produtos:</span>{" "}
          <span className="font-bold">{totalItems}</span>
        </div>
        <div className="flex items-center gap-2">
          <TruckIcon className="text-primary" />{" "}
          <span className="font-bold">Grátis</span>
        </div>
        <div>
          <span>Total:</span> <span className="font-bold">{total}</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="mb-4 flex gap-2">
          <Input placeholder="Cupom de desconto" className="w-full" />
          <Button
            variant="outline"
            className="border-primary uppercase text-primary hover:text-primary"
          >
            Aplicar
          </Button>
        </div>
        <Button className="w-full" onClick={handleFinishOrder}>
          Finalizar pedido
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductResume;
