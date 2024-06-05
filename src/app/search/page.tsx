"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Products from "@/components/products";
import Search from "@/components/search";

const SearchPage = () => {
  // const searchParams = useSearchParams();
  // const query = searchParams.get("q");

  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
        </div>
      }
    >
      <section className="mx-auto h-auto w-full max-w-7xl">
        <Search />
        {/* {query && <Products searchQuery={query} />} */}
      </section>
    </Suspense>
  );
};

export default SearchPage;
