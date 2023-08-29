import { useContext } from "react";
//External
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
//Context
import MainContext from "./../../Contexts/MainContext";
const HeaderIcons = () => {
  const { cart } = useContext(MainContext);

  return (
    <>
      <Link to="/cart">
        <span className="header-icon">
          <span>{cart.length}</span>
          <ShoppingCart />
        </span>
      </Link>
    </>
  );
};

export default HeaderIcons;
