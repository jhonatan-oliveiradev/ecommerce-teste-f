import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProductResume from "@/app/cart/components/product-resume";
import CategoryItem from "./category-item";

interface SideMenuProps {
  categories: {
    slug: string;
    name: string;
  }[];
}

const SideMenu = ({ categories }: SideMenuProps) => {
  return (
    <Sheet>
      <Button size="icon">
        <SheetTrigger>
          <MenuIcon size={16} />
        </SheetTrigger>
      </Button>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="uppercase">Categorias</SheetTitle>
          <SheetDescription className="pb-2 text-xs text-muted-foreground">
            Navegue através das categorias para encontrar o produto que procura.
          </SheetDescription>
        </SheetHeader>
        <div className="max-h-[calc(100vh - 550px)] flex flex-col gap-1 overflow-y-scroll">
          {categories.map((category) => (
            <CategoryItem key={category.slug} category={category} />
          ))}
        </div>
        {/* <SheetFooter className="fixed bottom-0 right-1 flex items-center">
          <ProductResume />
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
