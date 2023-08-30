import { ArrowBackIosRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ProductBradCrump = ({findProduct}) => {
  return (
    <div>
      <div className="product-page-back-parent">
        <div className="col-7 col-lg-6">
          <div className="product-page-bradcrump">
            <span>محصولات / {findProduct.productName} </span>
          </div>
        </div>
        <div className="col-5 col-lg-6 product-page-back">
          <Link to="/">
            <span>
              بازگشت به صفحه اصلی
              <ArrowBackIosRounded fontSize="medium" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductBradCrump;
