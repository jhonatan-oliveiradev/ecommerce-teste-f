import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex h-16 w-full items-center justify-center bg-secondary/50">
      <div className="flex gap-2">
        <Input
          placeholder="Busque um produto"
          className="border-none bg-background outline-none hover:ring-2 hover:ring-secondary focus-visible:ring-2 focus-visible:ring-primary"
        />
        <Button size="icon">
          <SearchIcon size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Search;
