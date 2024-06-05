import Categories from "@/components/categories";
import Footer from "@/components/footer";
import HeroBanner from "@/components/hero-banner";
import Products from "@/components/products";
import SearchWrapper from "./search/components/search-wrapper";

export default function Home() {
  return (
    <>
      <SearchWrapper />
      <HeroBanner />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}
