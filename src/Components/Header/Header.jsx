import { HeaderNav, HeaderBrand, HeaderIcons } from "./";
import { MenuTwoTone } from '@mui/icons-material';
import { useContext } from "react";
import MainContext from "../../Contexts/MainContext";
const Header = () => {

  const {manageDrawer} = useContext(MainContext);
  
  return (
    <div className="header">
      <div className="container">
        <div className="header-body">
          <div className=" d-lg-none col-2 header-menu-icon">
            <span onClick={()=>manageDrawer(true)}><MenuTwoTone fontSize="large"/></span>
          </div>
          <div className="d-none d-lg-block col-lg-4 header-item nav-parent">
            <HeaderNav />
          </div>

          <div className="col-8 col-lg-4 header-item title-parent">
            <HeaderBrand />
          </div>

          <div className="col-2 col-lg-4 header-item cart-parent">
            <HeaderIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
