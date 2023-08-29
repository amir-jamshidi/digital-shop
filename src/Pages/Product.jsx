import { useParams } from "react-router-dom";
import { useContext } from "react";
import "../Styles/product.css";
import MainContext from "./../Contexts/MainContext";
import Separator from "./../Utils/Separator";

const Product = () => {
  const { recentProducts } = useContext(MainContext);
  const { productID } = useParams();
  let findProduct = [];
  const findProductInfo = () => {
    findProduct = [...recentProducts].find(
      (product) => product.productId == productID
    );
  };

  findProductInfo();

  return (
    <>
    <div className="product-page-back-parent">
      
    </div>
      <div className="cart">
        {findProduct && (
          <div className="product-content">
            <div className="row">
              <div className="col-3">
                <img
                  src={findProduct.productImg[0]}
                  className="product-page-img"
                  alt=""
                />
              </div>
              <div className="col-6">
                <div className="product-page-parent">
                  <ul className="product-page-list">
                    <li>نام محصول : {findProduct.productName}</li>
                    <li>برند محصول : {findProduct.productBrand}</li>
                    <li className="product-color-parent">
                      رنگ بندی محصول :
                      <div className="product-page-colors">
                        {findProduct.productColors.map((color, index) => (
                          <span
                            key={index}
                            style={{ backgroundColor: color }}
                          ></span>
                        ))}
                      </div>
                    </li>
                    <li>شناسه محصول : {findProduct.productId}</li>
                    <li>
                      تعداد موجودی در انبار : {findProduct.productInventory}{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div className="product-page-price-parent">
                  <h3 className="product-page-price-title">باکس خرید</h3>
                  <p className="product-page-color-title">
                    رنگ مورد نظر را انتخاب کنید :{" "}
                  </p>
                  <div className="product-page-colors">
                    {findProduct.productColors.map((color, index) => (
                      <span
                        key={index}
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </div>
                  <h4 className="product-page-price">
                    {Separator(findProduct.productPrice)}
                  </h4>
                  <button className="product-page-btn-buy">
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
