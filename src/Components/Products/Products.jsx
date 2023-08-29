import SingleProduct from "./SingleProduct";
import { useContext } from "react";
import MainContext from "../../Contexts/MainContext";
const Products = () => {
  const { recentProducts } = useContext(MainContext);

  return (
    <div>
      <div className="main">
        <h5 className="main-header">محصولات اخیر</h5>
        <hr className="hr" />
        <div className="main-content">
          <div className="row">
            {recentProducts &&
              recentProducts.map((product) => (
                <SingleProduct key={product.id} {...product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
