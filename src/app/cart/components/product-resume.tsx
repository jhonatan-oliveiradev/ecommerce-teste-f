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
import { CopyIcon, TruckIcon } from "lucide-react";
import { CartContext } from "@/contexts/cart-context";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const ProductResume = () => {
  const { push } = useRouter();
  const { total, getTotalItems, clearCart } = useContext(CartContext);
  const totalItems = getTotalItems();
  const { toast } = useToast();

  const handleFinishOrder = () => {
    toast({
      title: "Pedido finalizado",
      description: "Seu pedido foi finalizado com sucesso",
      duration: 1000,
    }),
      clearCart();

    push("/checkout");
  };

  return (
    <Card className="my-6 flex min-w-[350px] flex-col items-start justify-center">
      <CardHeader className="mb-2 w-full flex-row items-center justify-between border-b">
        <p className="font-bold">Resumo do pedido</p>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="text-xs italic text-muted-foreground"
              >
                Cupons disponíveis
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Resgate cupons e economize!</DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground">
                  Aplique um cupom de desconto e economize em sua compra.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    MOUSE55OFF
                  </Label>
                  <Input id="link" defaultValue="MOUSE55OFF" readOnly />
                </div>
                <Button type="submit" size="sm" className="px-3">
                  <span className="sr-only">Copy</span>
                  <CopyIcon className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    FONE20OFF
                  </Label>
                  <Input id="link" defaultValue="FONE20OFF" readOnly />
                </div>
                <Button type="submit" size="sm" className="px-3">
                  <span className="sr-only">Copy</span>
                  <CopyIcon className="h-4 w-4" />
                </Button>
              </div>
              <DialogFooter>
                <DialogClose>
                  <Button type="submit">Confirmar</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
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
          <span>Seu saldo:</span> <span className="font-bold">R$ 25,50</span>
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
