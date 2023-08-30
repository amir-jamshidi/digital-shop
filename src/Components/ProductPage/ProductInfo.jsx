const ProductInfo = ({findProduct}) => {
  return (
    <div className="col-12 product-page-info-parent">
      <h4 className="product-page-info-title">توضیحات محصول : </h4>
      <p className="product-page-info-body">{findProduct.productInfo}</p>
    </div>
  );
};

export default ProductInfo;
