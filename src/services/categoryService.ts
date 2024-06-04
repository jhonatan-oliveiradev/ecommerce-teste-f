const apiUrl = process.env.PUBLIC_NEXT_MOCK_API;

export async function fetchCategories() {
  const response = await fetch(`${apiUrl}/products`);
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
