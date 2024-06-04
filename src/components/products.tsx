"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/services/api";
import { CartContext } from "@/contexts/cart-context";

export interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  cover: string;
  category: string;
}

interface ProductsComponentProps {
  category?: string;
  searchQuery?: string;
}

const Products = ({ category, searchQuery }: ProductsComponentProps) => {
  const { addItemToCart } = useContext(CartContext);
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      try {
        let response;
        if (category) {
          response = await api.get(`/products?category=${category}`);
        } else if (searchQuery) {
          response = await api.get(`/products?search=${searchQuery}`);
        } else {
          response = await api.get("/products");
        }
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
      setLoading(false);
    }

    getProducts();
  }, [category, searchQuery]);

  const handleAddItemToCart = (product: ProductsProps) => {
    addItemToCart(product);
    toast({
      title: "Produto adicionado ao carrinho!",
      description: "Pode continuar suas compras",
    });
  };

  return (
    <section className="mx-auto h-auto w-full max-w-7xl">
      <h2 className="my-4 text-left text-2xl font-bold">
        {category ? `Produtos na categoria ${category}` : "Produtos em alta"}
      </h2>

      {loading && (
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div key={item} className="w-full">
              <Card className="h-[334px] w-[228px]">
                <CardContent>
                  <Skeleton className="h-[200px] w-[178px] pt-6" />
                  <Skeleton className="mt-4 h-6 w-2/3" />
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <Skeleton className="h-6 w-1/4" />
                  <Skeleton className="h-6 w-6" />
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      )}

      {!loading && (
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <div key={product.id} className="w-full">
              <Card className="h-auto">
                <CardContent>
                  <Image
                    src={product.cover}
                    alt={product.title}
                    height={0}
                    width={0}
                    className="h-[200px] w-full object-contain py-6"
                    sizes="100vw"
                    quality={100}
                  />
                  <p className="line-clamp-2">{product.title}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <span className="font-bold">
                    R${" "}
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                  <Button size="icon">
                    <ShoppingCartIcon
                      onClick={() => handleAddItemToCart(product)}
                    />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
