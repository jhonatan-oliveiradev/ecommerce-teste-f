export async function fetchCategories() {
  const response = await fetch("http://localhost:3333/products");
  const products = await response.json();
  const categoriesSet = new Set(
    products.map((product: any) => product.category),
  );
  const categories = Array.from(categoriesSet).map((category) => ({
    slug: category,
    name: category,
  }));
  return categories;
}
