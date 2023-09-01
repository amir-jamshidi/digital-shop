import ProductComment from "./ProductComment";

const ProductComments = ({ findProduct }) => {
  console.log(findProduct);
  return (
    <div className="col-12">
      <div className="col-12 product-page-info-parent">
        <h4 className="product-page-property-title">نظر خریداران :</h4>

        <ul className="product-page-comments-list">
          {findProduct.productComments.map((comment) => (
            <ProductComment key={comment.id} {...comment} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductComments;
