import Separator from "../../Utils/Separator";
import { Link } from "react-router-dom";

const SidebarItem = ({ productId, productImg, productName, productPrice }) => {
  return (
    <>
      <hr className="hr-line-sidebar" />
      <div className="sidebar-item">
        <img src={productImg[0]} alt="" className="col-3 item-img" />
        <div className="col-9">
          <p className="item-title">
            <Link to={`product/${productId}`}>{productName}</Link>
          </p>
          <p className="item-price">{Separator(productPrice)}</p>
        </div>
      </div>
    </>
  );
};

export default SidebarItem;
