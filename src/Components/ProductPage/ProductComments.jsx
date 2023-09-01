import ProductComment from "./ProductComment";
import { useState } from "react";

const ProductComments = ({ findProduct }) => {

  
  if(!findProduct.productComments) return


  const allCommentCount = findProduct.productComments.length;
  const [commentShowCount, setCommentShowCount] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const paginationCount = Math.ceil(allCommentCount / commentShowCount);

  const filterComment = [...findProduct.productComments].slice(
    5 * currentPage - 5,
    currentPage * 5
  );

  const changePage = (index) => {
    setCurrentPage(index);
  };

  

  return (
    <div className="col-12">
      <div className="col-12 product-page-info-parent">
        <h4 className="product-page-property-title">نظر خریداران :</h4>

        <ul className="product-page-comments-list">
          {filterComment.map((comment) => (
            <ProductComment key={comment.id} {...comment} />
          ))}
        </ul>

        <ul className="pagination-comments">
          {[...Array.from({ length: paginationCount })].map((i, index) => {
            return (
              <li
                onClick={() => changePage(index + 1)}
                className={
                  currentPage === index + 1
                    ? "pagination-comments-item page-active"
                    : "pagination-comments-item"
                }
              >
                {index + 1}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductComments;
