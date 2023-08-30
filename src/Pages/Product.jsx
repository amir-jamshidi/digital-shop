import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { ArrowBackIosRounded, ReplyAll } from "@mui/icons-material";

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
      {findProduct && (
        <>
          <div className="product-page-back-parent">
            <div className="col-6">
              <div className="product-page-bradcrump">
                <span>
                  جزئیات محصولات / دیجیتال / {findProduct.productName}{" "}
                </span>
              </div>
            </div>
            <div className="col-6 product-page-back">
              <Link to="/">
                <span>
                  بازگشت به صفحه اصلی
                  <ArrowBackIosRounded fontSize="medium" />
                </span>
              </Link>
            </div>
          </div>
          <div className="product">
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
              <hr className="col-12" />
              <div className="col-12 product-page-info-parent">
                <h4 className="product-page-info-title">توضیحات محصول : </h4>
                <p className="product-page-info-body">
                  {findProduct.productInfo}
                </p>
              </div>
              <hr className="col-12" />
              <div className="col-12">
                <div className="col-12 product-page-info-parent">
                  <h4 className="product-page-property-title">
                    مشخصات محصول :{" "}
                  </h4>
                  <ul className="product-page-property">
                    <li className="product-page-property-item">
                      <span className="col-4">امکانات ظاهری</span>
                      <span className="col-8">دسته بی سیم</span>
                    </li>

                    <li className="product-page-property-item">
                      <span className="col-4">تعداد دسته</span>
                      <span className="col-8">یک عدد</span>
                    </li>
                    <li className="product-page-property-item">
                      <span className="col-4">فناوری‌های ارتباطی</span>
                      <span className="col-8">بلوتوث</span>
                    </li>
                    <li className="product-page-property-item">
                      <span className="col-4">امکانات و قابلیت‌ها</span>
                      <span className="col-8">
                        Ethernet. ۸۰۲.۳ ۱۰/۱۰۰/۱۰۰۰ دارای ۲ عدد پورت HDMI ۲.۱
                        دارای ۳ عدد پورت
                      </span>
                    </li>
                    <li className="product-page-property-item">
                      <span className="col-4">خروجی صدا</span>
                      <span className="col-8">
                        Dolby Digital ۵.۱, Dolby TrueHD with Atmos
                      </span>
                    </li>

                    <li className="product-page-property-item">
                      <span className="col-4">خروجی تصویر</span>
                      <span className="col-8">
                        HDMI با پشتیبانی از فرمت‌های ۴K و HDR
                      </span>
                    </li>
                    <li className="product-page-property-item">
                      <span className="col-4">حافظه RAM</span>
                      <span className="col-8">
                        ۱۶GB GDDR۶ w/۳۲۰ bit-wide bus
                      </span>
                    </li>
                    <li className="product-page-property-item">
                      <span className="col-4">پردازشگر گرافیکی GPU</span>
                      <span className="col-8">
                        پردازنده‌ی گرافیکی AMD RDNA ۲
                      </span>
                    </li>
                    <li className="product-page-property-item">
                      <span className="col-4">پردازشگر اصلی CPU</span>
                      <span className="col-8">
                        پردازنده‌ی هشت هسته‌ای Zen ۲
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="col-12">
                <div className="col-12 product-page-info-parent">
                  <h4 className="product-page-property-title">
                    نظر خریداران :
                  </h4>

                  <ul className="product-page-comments-list">
                    <li className="product-page-comments-parent">
                      <div className="product-page-commnet-content">
                        <div className="product-page-comment-badge-parent">
                          <div className="col-6 d-flex align-items-center justify-content-end">
                            <span className="product-page-comment-time">
                              در تاریخ : 20 شهریور 1402 در ساعت : 18:20
                            </span>
                          </div>
                          <div className="col-6 d-flex align-content-center justify-content-start">
                            <span className="product-page-comment-badge">
                              خریدار محصول
                            </span>
                          </div>
                        </div>
                        <div className="product-page-comment-body">
                          <div className="col-1">
                            <div className="product-page-img-parent">
                              <img
                                src="/assets/ps5.jpg"
                                className="product-page-comments-img"
                                alt=""
                              />
                              <span className="product-page-comment-name">
                                علی محمدی :
                              </span>
                            </div>
                          </div>
                          <div className="col-10">
                            <div className="product-page-comment-title-parent">
                              <span>
                                سلام من از این محصول استفاده کردم و واقعا خوب
                                بود . مرسی از دیجیتال استور برای پشتیبانی و
                                حدمات خوبی که داره در مورد گارانتی هم باید بگم
                                که کارت گارانتی 24 ماهه داخل خود بسته بود و
                                دقیقا تا دو سال بعد گارانتیش اعتبار داشت . واقعا
                                مرسی از مجموعه
                              </span>
                            </div>
                          </div>
                          <div className="col-1">
                            <div className="product-page-comment-replay-parent">
                              <span className="product-page-comment-replay">
                                پاسخ <ReplyAll />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="product-page-comments-parent">
                      <div className="product-page-commnet-content">
                        <div className="product-page-comment-badge-parent">
                          <div className="col-6 d-flex align-items-center justify-content-end">
                            <span className="product-page-comment-time">
                              در تاریخ : 20 شهریور 1402 در ساعت : 18:20
                            </span>
                          </div>
                          <div className="col-6 d-flex align-content-center justify-content-start">
                            <span className="product-page-comment-badge">
                              خریدار محصول
                            </span>
                          </div>
                        </div>
                        <div className="product-page-comment-body">
                          <div className="col-1">
                            <div className="product-page-img-parent">
                              <img
                                src="/assets/ps5.jpg"
                                className="product-page-comments-img"
                                alt=""
                              />
                              <span className="product-page-comment-name">
                                علی محمدی :
                              </span>
                            </div>
                          </div>
                          <div className="col-10">
                            <div className="product-page-comment-title-parent">
                              <span>
                                سلام من از این محصول استفاده کردم و واقعا خوب
                                بود . مرسی از دیجیتال استور برای پشتیبانی و
                                حدمات خوبی که داره در مورد گارانتی هم باید بگم
                                که کارت گارانتی 24 ماهه داخل خود بسته بود و
                                دقیقا تا دو سال بعد گارانتیش اعتبار داشت . واقعا
                                مرسی از مجموعه
                              </span>
                            </div>
                          </div>
                          <div className="col-1">
                            <div className="product-page-comment-replay-parent">
                              <span className="product-page-comment-replay">
                                پاسخ <ReplyAll />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
