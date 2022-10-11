import Page from "../components/Page";
import Navbar from "../layout/Navbar";
import Hero from "../sections/@home/hero/Hero";
import Products from "../sections/@home/products/Products";
import Price from "../sections/@home/price/Price";
import Keunggulan from "../sections/@home/keunggulan/Keunggulan";
import Services from "../sections/@home/services/Services";
import Reviews from "../sections/@home/reviews/Reviews";
import Subscription from "../sections/@home/subscription/Subscription";
import AboutUs from "../sections/@home/aboutus/AboutUs";

export default function Home() {
  return (
    <Page>
      <Navbar />
      <Hero />
      <Price />
      <Products />
      <Keunggulan />
      <Reviews />
      <Services />
      <Subscription />
      <AboutUs />
    </Page>
  );
}
