"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Products from "@/components/products";
import Search from "@/components/search";

const allProducts = [
  {
    id: 1,
    title: "Airpods Apple, com Estojo de Recarga, Bluetooth",
    description: "Airpods Apple, com Estojo de Recarga, Bluetooth, Branco...",
    price: 120,
    discountPrice: 150,
    cover: "https://i.imgur.com/uXrbyfA.jpg",
    category: "fones",
  },
];

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    if (searchQuery) {
      const results = allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    router.push(`/search?q=${query}`);
  };

  return (
    <section className="mx-auto h-auto w-full max-w-7xl">
      <Search onSearch={handleSearch} />
      <Products searchQuery={searchQuery} products={filteredProducts} />
    </section>
  );
};

export default SearchPage;
