"use client";

import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/contexts/cart-context";
import { useToast } from "@/components/ui/use-toast";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon, StarHalf, StarIcon } from "lucide-react";
import { api } from "@/services/api";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  cover: string;
  category: string;
}

const ProductPage = () => {
  const { addItemToCart } = useContext(CartContext);

  const { id } = useParams();

  const [product, setProduct] = useState<ProductProps>();
  const [similarProducts, setSimilarProducts] = useState<ProductProps[]>([]);

  const { toast } = useToast();

  useEffect(() => {
    if (!id) return;

    async function getProduct() {
      try {
        const response = await api.get(`/products`);
        const productData = response.data.find(
          (prod: ProductProps) => prod.id === parseInt(id as string),
        );
        setProduct(productData);
        const categoryResponse = await api.get(
          `/products?category=${productData.category}`,
        );
        setSimilarProducts(categoryResponse.data);
      } catch (error) {
        console.error("Failed to fetch product", error);
      }
    }

    getProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="mx-auto h-auto w-full max-w-7xl">
        <h1 className="my-4 text-left text-2xl font-bold">
          Detalhes do produto
        </h1>
        <div className="flex w-full items-center justify-between gap-8">
          <Skeleton className="h-[250px] w-[400px] pt-6" />
          <div className="flex w-full flex-col gap-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-[132px] w-full" />
            <Skeleton className="h-4 w-32" />
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-10 w-10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleAddItemToCart = (product: ProductProps) => {
    addItemToCart(product);
    toast({
      title: "Produto adicionado ao carrinho!",
      description: "Pode continuar suas compras",
    });
  };

  return (
    <section className="mx-auto h-auto w-full max-w-7xl">
      <h1 className="my-4 text-left text-2xl font-bold">Detalhes do produto</h1>
      <Card className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
        <Image
          src={product.cover}
          alt={product.title}
          height={0}
          width={0}
          className="h-auto w-[400px] rounded-tl-xl rounded-tr-xl object-contain lg:rounded-bl-xl lg:rounded-tr-none"
          sizes="100vw"
          quality={100}
        />

        <div className="flex flex-col justify-between px-4 lg:pr-4">
          <div>
            <span className="text-xs text-muted-foreground">
              NOVO | 1000 vendidos
            </span>
            <h2 className="text-3xl font-semibold">{product.title}</h2>
            <span className="text-sm text-primary">Disponível em estoque</span>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <StarIcon size={12} className="fill-primary text-primary" />
                <StarIcon size={12} className="fill-primary text-primary" />
                <StarIcon size={12} className="fill-primary text-primary" />
                <StarIcon size={12} className="fill-primary text-primary" />
                <StarHalf size={12} className="fill-primary text-primary" />
              </div>
              <span className="text-xs text-muted-foreground">
                (4.5) 232 avaliações
              </span>
            </div>
          </div>
          <div className="my-4">
            <span>Descrição:</span>
            <p className="">{product.description}</p>
          </div>
          <span className="mb-4 capitalize text-muted-foreground">
            Categoria: {product.category}
          </span>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground line-through">
                {product.discountPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <span className="text-2xl font-bold">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <Button size="icon" onClick={() => handleAddItemToCart(product)}>
              <ShoppingCartIcon />
            </Button>
          </div>
        </div>
      </Card>

      <div className="flex flex-col">
        <h2 className="my-4 text-left text-2xl font-bold">
          <span className="capitalize">{product.category}</span> semelhantes
        </h2>

        {similarProducts.length > 0 ? (
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {similarProducts
              .filter((similarProduct) => similarProduct.id !== product.id) // Remover o produto atual da lista de produtos semelhantes
              .map((similarProduct, index) => (
                <div key={index} className="w-full">
                  <Card className="h-auto">
                    <Image
                      src={similarProduct.cover}
                      alt={similarProduct.title}
                      height={200}
                      width={200}
                      className="h-[200px] w-full object-contain py-6"
                      sizes="100vw"
                      quality={100}
                    />
                    <div className="px-4">
                      <p className="line-clamp-2">{similarProduct.title}</p>
                      <div className="my-4 flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs text-muted-foreground line-through">
                            {similarProduct.discountPrice.toLocaleString(
                              "pt-BR",
                              {
                                style: "currency",
                                currency: "BRL",
                              },
                            )}
                          </span>
                          <span className="font-bold">
                            {similarProduct.price.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </span>
                        </div>
                        <Button
                          size="icon"
                          onClick={() => handleAddItemToCart(similarProduct)}
                        >
                          <ShoppingCartIcon />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
          </div>
        ) : (
          <p className="italic text-muted-foreground">
            Não existem mais {product.category} disponíveis.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductPage;
