import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";

const Products = () => {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <h2 className="my-4 text-left text-2xl font-bold">Produtos em alta</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="w-full">
          <Card>
            <CardContent>
              <Image
                src="https://i.imgur.com/uXrbyfA.jpg"
                alt="image 1"
                height={0}
                width={0}
                className="h-auto w-full object-contain py-6"
                sizes="100vw"
                quality={100}
              />
              <p>Logitech MX Master 3s</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <span className="font-bold">R$ 400,00</span>
              <Button size="icon">
                <ShoppingCartIcon />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;
