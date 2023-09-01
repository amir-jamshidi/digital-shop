import "./drawer.css";
import { useContext, useState } from "react";
import MainContext from "../../Contexts/MainContext";
import { CloseTwoTone } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeRounded,
  InfoRounded,
  AccountCircleRounded,
} from "@mui/icons-material";
const DrawerRight = () => {
  const { drawer, manageDrawer } = useContext(MainContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch('');
    manageDrawer(false);
  };

  return (
    <div className={drawer ? "drawer show d-lg-none" : "drawer d-lg-none"}>
      <div className="drawer-content">
        <div className="drawer-close-icon">
          <span onClick={() => manageDrawer(false)}>
            <CloseTwoTone fontSize="large" />
          </span>
        </div>
        <form className="form-search" onSubmit={searchSubmit}>
          <input
            placeholder="دنبال چیزی میگردی ؟"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

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
