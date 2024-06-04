"use client";

import { useSearchParams } from "next/navigation";
import Products from "@/components/products";
import Search from "@/components/search";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <section className="mx-auto h-auto w-full max-w-7xl">
      <Search />
      {query && <Products searchQuery={query} />}
    </section>
  );
};

export default SearchPage;
