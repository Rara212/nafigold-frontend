import Page from "../components/Page";
import Navbar from "../layout/Navbar";
import Hero from "../sections/@home/hero/Hero";
import Products from "../sections/@home/products/Products";
import Price from "../sections/@home/price/Price";
import Keunggulan from "../sections/@home/keunggulan/Keunggulan";

export default function Home() {
  return (
    <Page>
      <Navbar />
      <Hero />
      <Price />
      <Products />
      <Keunggulan/>
    </Page>
  );
}
