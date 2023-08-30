import Separator from "../../Utils/Separator"

const ProductBuyBox = ({findProduct})=>{

    return(
        <div className="col-12 mb-3 col-lg-3 mb-lg-0">
        <div className="product-page-price-parent">
          <h3 className="product-page-price-title">باکس خرید</h3>
          <p className="product-page-color-title">
            رنگ مورد نظر را انتخاب کنید :{" "}
          </p>
          <div className="product-page-colors">
            {findProduct.productColors.map((color, index) => (
              <span key={index} style={{ backgroundColor: color }}></span>
            ))}
          </div>
          <h4 className="product-page-price">
            {Separator(findProduct.productPrice)}
          </h4>
          <button className="product-page-btn-buy">افزودن به سبد خرید</button>
        </div>
      </div>
    )
}

export default ProductBuyBox