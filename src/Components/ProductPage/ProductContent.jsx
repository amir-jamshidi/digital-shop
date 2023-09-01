import { ReplyAll } from "@mui/icons-material";
import Rating from "../../Utils/Rating/Rating";
import Separator from "../../Utils/Separator";
import ProductBuyBox from "./ProductBuyBox";
import ProductComments from "./ProductComments";
import ProductImg from "./ProductImg";
import ProductInfo from "./ProductInfo";
import ProductMiniProperty from "./ProductMiniProperty";
import ProductProperty from "./ProductProperty";

const ProductContent = ({ findProduct }) => {
  return (
    <div className="product-content">
      <div className="row">
        <ProductImg findProduct={findProduct} />
        <ProductMiniProperty findProduct={findProduct} />
        <ProductBuyBox findProduct={findProduct} />
      </div>
      <hr className="col-12" />
      <ProductInfo findProduct={findProduct} />
      <hr className="col-12" />
      <ProductProperty findProduct={findProduct} />
      <hr />
      <ProductComments findProduct={findProduct} />
      
    </div>
  );
};

export default ProductContent;
