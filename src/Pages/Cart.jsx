import { useContext } from "react";
import MainContext from "./../Contexts/MainContext";
import { RemoveCircleRounded } from "@mui/icons-material";
import Separator from "./../Utils/Separator";
import { Link } from "react-router-dom";
import ProductBradCrump from "./../Components/ProductPage/ProductBradCrump";
const Cart = () => {
  const { cart, removeItemCart } = useContext(MainContext);
  let totalPrice = 0;
  return (
    <div>
      <ProductBradCrump findProduct={""} />
      <div className="cart">
        <div className="row">
          <div className="cart-page-parent col-12">
            <h2 className="cart-page-title">سبد خرید</h2>

            {cart.length ? (
              <>
                <ul className="cart-list">
                  {cart.map((c, index) => {
                    totalPrice += c.productPrice * c.productCount;
                    return (
                      <>
                        <li key={c.id} className="cart-item">
                          <div className="row w-100">
                            <span className="d-none d-lg-block col-lg-1 mt-lg-0 align-self-center cart-item-count">
                              {index + 1}
                            </span>

                            <div className="col-12 col-lg-2 mt-lg-0 cart-item-img-parent">
                              <img
                                className=""
                                width={100}
                                src={c.productImg}
                                alt=""
                              />
                            </div>

                            <span className="col-12 mt-3 col-lg-2 mt-lg-0 align-self-center cart-item-title ">
                              <Link
                                className="cart-item-title-link"
                                to={`/product/${c.productId}`}
                              >
                                {c.productName}
                              </Link>
                            </span>

                            <div className="col-12 mt-2 col-lg-1 mt-lg-0  cart-item-color-parent">
                              <span
                                className="cart-item-color"
                                style={{ backgroundColor: c.productColors }}
                              ></span>
                            </div>

                            <span className="col-5 mt-3 col-lg-2 mt-lg-0 align-self-center cart-item-price">
                              {Separator(c.productPrice)}
                            </span>

                            <span className="col-2 mt-3 col-lg-1 mt-lg-0 align-self-center cart-item-count">
                              1
                            </span>

                            <span className="col-5 mt-3 col-lg-2 mt-lg-0 align-self-center cart-item-amount">
                              {Separator(c.productPrice * c.productCount)}
                            </span>

                            <div className="col-12 mt-3 col-lg-1 mt-lg-0 cart-item-icon-parent">
                              <span onClick={() => removeItemCart(c.id)}>
                                <RemoveCircleRounded className="remove-icon" />
                              </span>
                            </div>
                          </div>
                        </li>
                        <hr className="hr-line" />
                      </>
                    );
                  })}
                </ul>
                <div className="amount-parent">
                  <h5 className="cart-amount">{Separator(totalPrice)}</h5>
                  <div>
                    <button className="btn-buy col-6">
                      ادامه خرید و پرداخت
                    </button>
                    <button className="btn-cancel col-6">کنسل و حذف سبد</button>
                  </div>
                </div>
              </>
            ) : (
              <h1 className="empty-cart">سبد خرید شما خالیه !!!</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
