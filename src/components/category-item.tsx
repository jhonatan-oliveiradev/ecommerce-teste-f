// components/CategoryItem.tsx
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CATEGORY_ICON } from "../constants/category-icon";

interface CategoryItemProps {
  category: {
    slug: string;
    name: string;
  };
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex items-center justify-center gap-2 rounded-lg py-3"
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="hidden text-xs font-bold md:flex">
          {category.name}
        </span>
      </Badge>
    </Link>
  );
};

export default CategoryItem;
