import { ReplyAll } from "@mui/icons-material";
import Rating from "./../../Utils/Rating/Rating";
const ProductComment = ({ msg }) => {
    console.log(msg);
  return (
    <li className="product-page-comments-parent">
      <div className="product-page-commnet-content">
        <div className="product-page-comment-badge-parent">
          <div className="row w-100">
            <div className="col-12 col-lg-6 justify-content-lg-end d-flex align-items-center justify-content-center">
              <span className="product-page-comment-time">
                20 شهریور 1402 ساعت 18:20
              </span>
            </div>
            <div className="col-12 col-lg-6 justify-content-lg-start d-flex align-content-center justify-content-center my-2 my-lg-0">
              <span className="product-page-comment-badge">خریدار محصول</span>
            </div>
          </div>
        </div>

        <div className="product-page-comment-body">
          <div className="row">
            <div className="col-4 col-lg-2">
              <div className="product-page-img-parent">
                <img
                  src="/assets/ps5.jpg"
                  className="product-page-comments-img"
                  alt=""
                />
                <span className="product-page-comment-name">علی محمدی :</span>
                <Rating rateValue={3} isEdit={false} />
              </div>
            </div>
            <div className="col-8 col-lg-8">
              <div className="product-page-comment-title-parent">
                <span className="px-1 px-lg-0">{msg}</span>
              </div>
            </div>
            <div className="col-12 col-lg-2 mt-3 mt-lg-0">
              <div className="product-page-comment-replay-parent">
                <span className="product-page-comment-replay">
                  پاسخ <ReplyAll />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductComment;
