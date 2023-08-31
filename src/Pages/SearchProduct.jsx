import { useParams } from "react-router-dom";
import { useContext } from "react";
import MainContext from "../Contexts/MainContext";
const SearchProduct = () => {
  const { productName } = useParams();
  const { recentProducts } = useContext(MainContext);

  const findProducts = [...recentProducts].filter(product => product.productName.includes(productName));

  console.log(findProducts);



  return <div>product search {productName}</div>;
};
export default SearchProduct;
