import "./drawer.css";
import { useContext } from "react";
import MainContext from "../../Contexts/MainContext";
import { CloseTwoTone } from "@mui/icons-material";
import { Link } from "react-router-dom";
const DrawerRight = () => {
  const { drawer, manageDrawer } = useContext(MainContext);

  return (
    <div className={drawer ? "drawer show d-lg-none" : "drawer d-lg-none"}>
      <div className="drawer-content">
        <div className="drawer-close-icon">
          <span onClick={() => manageDrawer(false)}>
            <CloseTwoTone fontSize="large" />
          </span>
        </div>

        <div className="drawer-nav">
            <ul className="drawer-list">
            <li onClick={()=>manageDrawer(false)}><Link to='/'>صفحه اصلی</Link> </li>
            <li onClick={()=>manageDrawer(false)}><Link to='/about'>درباره ما</Link> </li>
            <li onClick={()=>manageDrawer(false)}><Link to='/contact'>تماس با ما</Link> </li>
             
            </ul>
          </div>
      </div>
    </div>
  );
};

export default DrawerRight;
