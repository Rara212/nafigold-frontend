import Page from "../components/Page";
import Navbar from "../layout/Navbar";
import Hero from "../sections/@home/hero/Hero";
import Products from "../sections/@home/products/Products";
import Price from "../sections/@home/price/Price";
import Keunggulan from "../sections/@home/keunggulan/Keunggulan";
import Services from "../sections/@home/services/Services";

export default function Home() {
  return (
    <Page>
      <Navbar />
      <Hero />
      <Price />
      <Products />
      <Keunggulan />
      <Services />
    </Page>
  );
}
