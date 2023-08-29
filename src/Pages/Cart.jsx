import { useContext } from "react";
import MainContext from "./../Contexts/MainContext";
import { RemoveCircleRounded } from "@mui/icons-material";
import Separator from "./../Utils/Separator";
const Cart = () => {
  const { cart, removeItemCart } = useContext(MainContext);
  let totalPrice = 0;
  return (
    <div>
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
                      <li key={c.id}>
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
                            {c.productName}
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

                          <div
                            onClick={() => removeItemCart(c.id)}
                            className="col-12 mt-3 col-lg-1 mt-lg-0 cart-item-icon-parent"
                          >
                            <RemoveCircleRounded className="remove-icon" />
                          </div>
                        </div>
                      </li>
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
