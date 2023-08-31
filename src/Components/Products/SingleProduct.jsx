import { useContext } from "react";
import MainContext from "./../../Contexts/MainContext";
import Separator from "./../../Utils/Separator";
import { Link } from 'react-router-dom';

const SingleProduct = ({
  id,
  productId,
  productPrice,
  productName,
  productInfo,
  productImg,
  productColors,
}) => {
  const { addToCart } = useContext(MainContext);

  return (
    <div className="col-12 col-md-6 col-lg-4 col-item-parent py-2">
      <div className="main-item">
        <div className="item-colors-parent">
          {productColors.map((color, index) => (
            <span key={index} style={{ backgroundColor: color }}></span>
          ))}
        </div>
        <img className="main-item-img" src={productImg[0]} alt="" />
        <p className="main-item-title">{productName}</p>
        <p className="main-item-info">{productInfo}</p>
        <p className="main-item-price">{Separator(productPrice)}</p>
        <button onClick={() => addToCart(productId)} className="btn-buy">
          افزودن به سبد خرید
        </button>
        <button className="btn-more"><Link to={`/product/${productId}`}>نمایش جزئیات بیشتر</Link></button>
      </div>
    </div>
  );
};

export default SingleProduct;
