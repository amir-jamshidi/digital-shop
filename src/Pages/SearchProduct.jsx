import { useParams } from "react-router-dom";
import { useContext } from "react";
import MainContext from "../Contexts/MainContext";
import "../Styles/search.css";
import SingleProduct from "./../Components/Products/SingleProduct";
import ProductBradCrump from './../Components/ProductPage/ProductBradCrump';
const SearchProduct = () => {
  const { productName } = useParams();
  const { recentProducts } = useContext(MainContext);

  const findProducts = [...recentProducts].filter((product) =>
    product.productName.includes(productName)
  );

  console.log(findProducts);

  return (
    <div>
      <ProductBradCrump findProduct={''}/>
      <div className="search d-flex flex-column p-4">
        <h5 className="search-page-title">
          نتایج : برای {`"${productName}"`} {findProducts.length} محصول پیدا شد
        </h5>
        <div className="row">
          {findProducts.map((p) => (
            <SingleProduct {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchProduct;
