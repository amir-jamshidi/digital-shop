const ProductImg = ({findProduct}) => {
  return (
    <div className="col-12 mb-3 col-lg-3 mb-lg-0">
      <img
        src={findProduct.productImg[0]}
        className="product-page-img"
        alt=""
      /> 
    </div>
  );
};

export default ProductImg;
