import Categories from "@/components/categories";
import Footer from "@/components/footer";
import HeroBanner from "@/components/hero-banner";
import Products from "@/components/products";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}
