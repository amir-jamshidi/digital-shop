const ProductMiniProperty = ({findProduct})=>{
    return(
        <div>
             <div className="col-12 mb-3 col-lg-6 mb-lg-0">
          <div className="product-page-parent">
            <ul className="product-page-list">
              <li>نام محصول : {findProduct.productName}</li>
              <li>برند محصول : {findProduct.productBrand}</li>
              <li className="product-color-parent">
                رنگ بندی محصول :
                <div className="product-page-colors">
                  {findProduct.productColors.map((color, index) => (
                    <span key={index} style={{ backgroundColor: color }}></span>
                  ))}
                </div>
              </li>
              <li>شناسه محصول : {findProduct.productId}</li>
              <li>تعداد موجودی در انبار : {findProduct.productInventory} </li>
            </ul>
          </div>
        </div>
        </div>
    )
}

export default ProductMiniProperty