import Categories from "@/components/categories";
import Footer from "@/components/footer";
import HeroBanner from "@/components/hero-banner";
import Products from "@/components/products";
import Search from "@/components/search";

export default function Home() {
  return (
    <>
      <Search />
      <HeroBanner />
      <Categories />
      <Products />

      <Footer />
    </>
  );
}
