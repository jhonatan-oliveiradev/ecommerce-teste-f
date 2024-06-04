"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim() !== "") {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <div className="flex h-16 w-full items-center justify-center bg-secondary/50">
      <div className="flex gap-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busque um produto"
          className="border-none bg-background outline-none hover:ring-2 hover:ring-secondary focus-visible:ring-2 focus-visible:ring-primary"
        />
        <Button size="icon" onClick={handleSearch}>
          <SearchIcon size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Search;
