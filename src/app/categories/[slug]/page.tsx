"use client";

import Products from "@/components/products";
import { useParams } from "next/navigation";

const CategoryPage = () => {
  const { slug } = useParams();
  const category = Array.isArray(slug) ? slug[0] : slug;

  return (
    <section className="mx-auto h-auto w-full max-w-7xl">
      {category && <Products category={category} />}
    </section>
  );
};

export default CategoryPage;
