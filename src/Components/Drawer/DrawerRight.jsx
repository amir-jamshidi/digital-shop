import "./drawer.css";
import { useContext } from "react";
import MainContext from "../../Contexts/MainContext";
import { CloseTwoTone } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  HomeRounded,
  InfoRounded,
  AccountCircleRounded,
} from "@mui/icons-material";
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
            <li
              className="d-flex justify-content-center align-items-center"
              onClick={() => manageDrawer(false)}
            >
              <span className="px-2">
                <HomeRounded />
              </span>
              <Link to="/">صفحه اصلی</Link>{" "}
            </li>
            <hr className="hr-line-sidebar" />
            <li
              className="d-flex justify-content-center align-items-center"
              onClick={() => manageDrawer(false)}
            >
              <span className="px-2">
                <InfoRounded />
              </span>
              <Link to="/about">درباره ما</Link>{" "}
            </li>
            <hr className="hr-line-sidebar" />
            <li
              className="d-flex justify-content-center align-items-center"
              onClick={() => manageDrawer(false)}
            >
              <span className="px-2">
                <AccountCircleRounded />
              </span>
              <Link to="/contact">تماس با ما</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrawerRight;
