const apiUrl = "https://665f200d1e9017dc16f2f561.mockapi.io/api/v1";
// const apiUrl = process.env.PUBLIC_NEXT_MOCK_API;

export async function fetchCategories() {
  const response = await fetch(`${apiUrl}/products`);
  if (!response.ok) {
    throw new Error(`API request failed with status: ${response.status}`);
  }

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
