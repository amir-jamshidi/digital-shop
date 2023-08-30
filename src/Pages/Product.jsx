import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ArrowBackIosRounded, ReplyAll } from "@mui/icons-material";

import "../Styles/product.css";
import MainContext from "./../Contexts/MainContext";
import Separator from "./../Utils/Separator";
import Rating from "../Utils/Rating/Rating";
import ProductBradCrump from "../Components/ProductPage/ProductBradCrump";
import ProductContent from "../Components/ProductPage/ProductContent";

const Product = () => {
  const { recentProducts } = useContext(MainContext);
  const { productID } = useParams();
  let findProduct = [];
  const findProductInfo = () => {
    findProduct = [...recentProducts].find(
      (product) => product.productId == productID
    );
  };

  useEffect(() => {
    window.scrollTo(0 , 0);
  }, []);

  findProductInfo();

  return (
    <>
      {findProduct && (
        <>
          <ProductBradCrump findProduct={findProduct} />
          <div className="product">
            <ProductContent findProduct={findProduct} />
          </div>
        </>
      )}
    </>
  );
};

export default Product;
