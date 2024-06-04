import { fetchCategories } from "@/services/categoryService";
import CategoryItem from "./category-item";

const Categories = async () => {
  const categories = await fetchCategories();
  return (
    <div className="my-4 grid grid-cols-7 gap-2">
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          category={category as { slug: string; name: string }}
        />
      ))}
    </div>
  );
};

export default Categories;
