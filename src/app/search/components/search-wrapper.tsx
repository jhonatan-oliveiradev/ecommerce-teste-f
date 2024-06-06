"use client";

import { useRouter } from "next/navigation";
import Search from "@/components/search";

const SearchWrapper = () => {
  const router = useRouter();

  const handleSearch = (query: string) => {
    router.push(`/search?q=${query}`);
  };

  return <Search onSearch={handleSearch} />;
};

export default SearchWrapper;
