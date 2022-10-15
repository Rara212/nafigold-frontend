import Page from "../components/Page";
import PurchaseForm from "../sections/@product/Form/purchaseform";
import Productdetails from "../sections/@product/productdetails";

//  '/produk-kami
export default function Products() {
  return <Page title="Produk Kami">
    <Productdetails/>
    <PurchaseForm classname="bg-white"/>
  </Page>;
}
