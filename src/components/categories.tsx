"use client";

import { useEffect, useState } from "react";
import CategoryItem from "./category-item";
import { api } from "@/services/api";
import { Skeleton } from "@/components/ui/skeleton";

interface CategoriesProps {
  slug: string;
  name: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<CategoriesProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      const response = await api.get("/categories");
      setCategories(response.data);
    };

    setLoading(true);
    getCategories();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <section className="mx-auto h-auto w-full max-w-7xl bg-secondary/50">
        <div className="my-4 grid grid-cols-7 gap-2 px-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
            <Skeleton key={item} className="h-[42px] w-full" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto h-auto w-full max-w-7xl bg-secondary/50">
      <div className="my-4 grid grid-cols-7 gap-2 px-2">
        {categories.map((category) => (
          <CategoryItem key={category.slug} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
