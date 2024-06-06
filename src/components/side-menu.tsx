import { ArrowLeftFromLineIcon, ShoppingCartIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CategoryItem from "./category-item";
import { Button } from "./ui/button";
import Link from "next/link";

interface SideMenuProps {
  categories: {
    slug: string;
    name: string;
  }[];
}

const SideMenu = ({ categories }: SideMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger className="rounded-lg bg-primary p-2 text-white">
        <ArrowLeftFromLineIcon size={16} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="uppercase">Categorias</SheetTitle>
          <SheetDescription className="pb-4 text-xs text-muted-foreground">
            Navegue através das categorias para encontrar o produto que procura.
          </SheetDescription>
        </SheetHeader>
        <div className="max-h-[calc(100vh - 550px)] flex flex-col gap-4 overflow-y-scroll">
          {categories.map((category) => (
            <CategoryItem key={category.slug} category={category} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
