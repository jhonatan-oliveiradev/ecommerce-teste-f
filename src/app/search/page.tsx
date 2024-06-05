"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Products from "@/components/products";
import Search from "@/components/search";

const SearchPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    router.push(`/search?q=${query}`);
  };

  return (
    <section className="mx-auto h-auto w-full max-w-7xl">
      <Search onSearch={handleSearch} />
      <Products searchQuery={searchQuery} />
    </section>
  );
};

export default SearchPage;
