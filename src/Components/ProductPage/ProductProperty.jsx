const ProductProperty = () => {
  return (
    <div className="col-12">
      <div className="col-12 product-page-info-parent">
        <h4 className="product-page-property-title">مشخصات محصول : </h4>
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
              Ethernet. ۸۰۲.۳ ۱۰/۱۰۰/۱۰۰۰ دارای ۲ عدد پورت HDMI ۲.۱ دارای ۳ عدد
              پورت
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
            <span className="col-8">HDMI با پشتیبانی از فرمت‌های ۴K و HDR</span>
          </li>
          <li className="product-page-property-item">
            <span className="col-4">حافظه RAM</span>
            <span className="col-8">۱۶GB GDDR۶ w/۳۲۰ bit-wide bus</span>
          </li>
          <li className="product-page-property-item">
            <span className="col-4">پردازشگر گرافیکی GPU</span>
            <span className="col-8">پردازنده‌ی گرافیکی AMD RDNA ۲</span>
          </li>
          <li className="product-page-property-item">
            <span className="col-4">پردازشگر اصلی CPU</span>
            <span className="col-8">پردازنده‌ی هشت هسته‌ای Zen ۲</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductProperty;
